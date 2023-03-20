import { NextIncomingMessage } from "next/dist/server/request-meta";
import { CheckAccessToken } from "../auth0/auth0";
import { getTokenFromCookie } from "../requestUtils";
import { IncomingMessage, ServerResponse } from "http";


export function AuthorizationMiddlewareGen(permissionsToCheck?: string[], csrfCheck?: boolean) {
    return async (req: NextIncomingMessage, res: ServerResponse<IncomingMessage>, next: any) => {
        try {
            const token = await getTokenFromCookie(req.headers.cookie, "access_token")
            const decodedAccessToken = await CheckAccessToken(token).catch((err) => {
                throw new Error("401::::" + err.message);
            });

            
            if (csrfCheck) {
                const cfrsCookieToken = await getTokenFromCookie(req.headers.cookie, "csrf_token").catch((err) => {
                    throw new Error("401::::" + err.message);
                });
                const csrfToken = req.headers["x-csrf-token"];
                if (!csrfToken || csrfToken !== cfrsCookieToken) {
                    throw new Error("401::::CSRF token is invalid")
                }
            }

            if (permissionsToCheck && permissionsToCheck.length > 0) {
                const { permissions }: {permissions: string[]} = decodedAccessToken.payload;

                const hasPermission = permissionsToCheck.every((permission) => permissions.includes(permission))
                if (!hasPermission) {
                    throw new Error("403::::User does not have permission to access this resource")
                }
            }

            req["access_token"] = token 
            next();
        } catch (error) {
            const info = error.message.split("::::");
            if (!res) { throw new Error(`${info[0]}`)}
            if (info.length === 2) {
                res.statusCode = parseInt(info[0]);
                res.write(JSON.stringify({ error: info[1] }));
                res.end();
                return;
            }

            res.statusCode = 401;
            res.write(JSON.stringify({ error: "Invalid access token" }));
            res.end();
            return;
        }
    }
}
