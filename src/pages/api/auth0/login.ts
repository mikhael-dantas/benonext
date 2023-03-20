import nextConnect from "next-connect";
import Api from "src/lib/api";
import { RedirectErrorFunction } from "src/lib/errorHandling/ErrorPageRedirect";

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

apiRoute.get(async (_, res) => {
    try {
        const domain = process.env.DOMAIN
        const clientId = process.env.CLIENT_ID
        const redirectUri = process.env.REDIRECT_URI
        const audience = process.env.AUDIENCE

        if (!domain || !clientId || !redirectUri || !audience) {
            throw new Error("500::::missing env variables");
        }


        // initiating the login attempt in api
        const query = `
            query {
                loginAttemptInit {
                    __typename
                    ...on State {
                        state,
                        expiration
                    }
                }
            }
        `
        const response = await Api.graphql(query, undefined);
        const { data } = response;
        if (!data || data.loginAttemptInit.__typename !== "State") {
            throw new Error("500::::data error");
        }

        const baseUrl = `https://${domain}`;
        const path = "/authorize";
        const queryArray = [
            `response_type=code`,
            `client_id=${clientId}`,
            `redirect_uri=${redirectUri}`,
            `scope=openid profile email`,
            `audience=${audience}`,
            `state=${data.loginAttemptInit.state}`
        ];
        return res.writeHead(302, {
            Location: `${baseUrl}${path}?${queryArray.join("&")}`
        }).end();
    } catch (err) {
        return RedirectErrorFunction(res, err)
    }
})

export default apiRoute;