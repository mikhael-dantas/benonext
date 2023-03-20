import nextConnect from "next-connect";
import { AuthorizationMiddlewareGen } from "src/lib/middlewares/authorization";

const apiRoute = nextConnect({
    // Handle any other HTTP method
    onNoMatch(req, res) {
        const resObj = { error: `Method '${req.method}' Not Allowed` }
        res.statusCode = 405;
        res.write(JSON.stringify(resObj));
        res.end();
    },
    onError(error, _, res) {
        const resObj = { error: `Sorry something Happened! ${error.message}` }
        res.statusCode = 501;
        res.write(JSON.stringify(resObj));
        res.end();
    }
});

apiRoute.get(AuthorizationMiddlewareGen(undefined, false),async (_, res) => {
    res.setHeader(
        "Set-Cookie", [
            `access_token=; Path=/; HttpOnly; Secure; Max-Age=0; SameSite=None`,
            `id_token=; Path=/; HttpOnly; Secure; Max-Age=0; SameSite=None`,
            `csrf_token=; Path=/; HttpOnly; Secure; Max-Age=0; SameSite=None`
        ],
    );
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.write(
        JSON.stringify({ auth0logout: 
            `https://${process.env.DOMAIN}/v2/logout?client_id=${process.env.CLIENT_ID}&returnTo=${process.env.APP_URI}`
        })
    );
    res.end();
    return
});

export default apiRoute;