import nextConnect from "next-connect";
import { getUserResourceFromServer } from "src/lib/auth0/auth0";
import { RedirectErrorFunction } from "src/lib/errorHandling/ErrorPageRedirect";
import { AuthorizationMiddlewareGen } from "src/lib/middlewares/authorization";

const apiRoute = nextConnect({
    // Handle any other HTTP method
    onNoMatch(req, res) {
        const resObj = { error: `Method '${req.method}' Not Allowed` }
        res.statusCode = 405;
        res.write(JSON.stringify(resObj));
        res.end();
    },
    onError(error, req, res) {
        const resObj = { error: `Sorry something Happened! ${error.message}` }
        res.statusCode = 501;
        res.write(JSON.stringify(resObj));
        res.end();
    }
});

apiRoute.get(AuthorizationMiddlewareGen(), async (req, res) => {
    try {
        const userInfo = await getUserResourceFromServer(req["access_token"]).catch((err) => {
            throw new Error(`500::::${err.message}`);
        });


        res.statusCode = 200;
        res.write(JSON.stringify(userInfo));
        res.end()
        return
    } catch (err) {
        return RedirectErrorFunction(res, err)
    }
});


export default apiRoute;


