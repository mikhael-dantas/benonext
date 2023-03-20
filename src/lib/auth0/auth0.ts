import { IncomingMessage, ServerResponse } from "http";
import { verify, decode } from "jsonwebtoken";
import JwksRsa from "jwks-rsa";
import { AuthorizationMiddlewareGen } from "../middlewares/authorization";

type TDecodedToken = {
    header: any,
    payload: any,
    signature: string
}

export type TUserInfo = {
    sub: string,
    name: string,
    nickname: string,
    picture: string,
    email: string,
    email_verified: boolean,
    given_name: string,
}

export function verifyAuth0RedirectUrl(scopedUrl: string): { code: string, state: string } {
    const params = new URLSearchParams(scopedUrl.split("?")[1]);
    const code = params.get("code");
    const state = params.get("state");

    return {
        code: code ? code : "",
        state: state ? state : ""
    }
}

export async function TouchApiToGetTokens(scopedCode: string): Promise<{ id_token: string, access_token: string }> {
    const payload = {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        code: scopedCode,
        grant_type: "authorization_code",
        redirect_uri: process.env.REDIRECT_URI
    };

    const options = {
        method: "POST",
        headers: {
            "content-type": "application/x-www-form-urlencoded"
        }
    };

    const apiUrl = `https://${process.env.DOMAIN}/oauth/token`

    const response = await fetch(apiUrl, {
        method: options.method,
        headers: options.headers,
        body: Object.entries(payload).map(([key, value]) => `${key}=${value}`).join('&'),
    })

    const parsedResponse = await response.json();

    const { id_token, access_token } = parsedResponse;

    if (!id_token || !access_token) {
        throw new Error("Failed to get tokens");
    }

    return { id_token, access_token };
}

export async function CheckIdToken(scopedIdToken: string): Promise<TDecodedToken> {
    const verifyIdTokenReturn = verify(scopedIdToken, process.env.CLIENT_SECRET, {
        audience: process.env.CLIENT_ID,
        issuer: `https://${process.env.DOMAIN}/`,
        complete: true
    });

    return verifyIdTokenReturn
}

export async function CheckAccessToken(scopedAccessToken: string): Promise<TDecodedToken> {
    const kid = decode(scopedAccessToken, { complete: true }).header.kid;

    const publicKeyFromCertificate = (await JwksRsa({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${process.env.DOMAIN}/.well-known/jwks.json`
    }).getSigningKey(kid)).getPublicKey()

    const verifyAccessTokenReturn = verify(
        scopedAccessToken,
        publicKeyFromCertificate,
        {
            algorithms: ["RS256"],
            audience: process.env.AUDIENCE,
            issuer: `https://${process.env.DOMAIN}/`,
            complete: true
        }
    );

    return verifyAccessTokenReturn
}

export async function getUserResourceFromServer(scopedToken: string): Promise<any> {
    const options = {
        method: 'GET',
        headers: {
            authorization: `Bearer ${scopedToken}`
        }
    }

    const response = await fetch(`https://${process.env.DOMAIN}/userinfo`,
        options,
    )

    if (response.status !== 200) {
        throw new Error(`Error fetching user resource`);
    }

    const userInfo = await response.json();
    return userInfo;
}

export async function ProtectedPageFunction(
    req:IncomingMessage, res: ServerResponse<IncomingMessage>, 
    options?: {
        permissions?: string[], 
    }) {
    try {
        await AuthorizationMiddlewareGen(options?.permissions)(req, undefined, () => {});
        return true;
    } catch (err) {
        if (err.message.startsWith("403")) {
            res.writeHead(302, {
                Location: "/forbidden",
            }).end();
        } else {
            res.writeHead(302, {
                Location: "/api/auth0/login",
            }).end();
        }
        return false;
    }
}

