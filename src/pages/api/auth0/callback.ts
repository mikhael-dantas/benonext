import nextConnect from "next-connect";
import { CheckAccessToken, CheckIdToken, TouchApiToGetTokens, verifyAuth0RedirectUrl } from "src/lib/auth0/auth0";
import crypto from "crypto";
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

apiRoute.get(async (req, res) => {
    try {
        // dealing with the redirect from auth0
        const { code, state } = verifyAuth0RedirectUrl(req.url);
        if (!code) {throw new Error("400::::code not found");}
        if (!state) {throw new Error("400::::state not found");}


        // retrieving the state from the api
        const query = `
            mutation {
                loginAttemptRetrieve(state: "${state}") {
                    __typename
                    ...on OperationResponse {
                        status,
                        message
                    }
                }
            }
        `;

        const { data } = await Api.graphql(query, undefined)
        if (!data) {throw new Error("500::::data error");}

        if (data.loginAttemptRetrieve?.status !== "success") {
            throw new Error("401::::" + data.loginAttemptRetrieve.message);
        }


        // getting the tokens from auth0
        const { id_token, access_token } = await TouchApiToGetTokens(code).catch((err) => {
            throw new Error("401::::" + err.message);
        });

        CheckIdToken(id_token).catch((err) => {
            throw new Error("401::::" + err.message);
        });


        await CheckAccessToken(access_token).catch((err) => {
            throw new Error("401::::" + err.message);
        });


        // registering the user in the api
        const registrationQuery = `
            mutation {
                loginRegistration(accessToken: "${access_token}") {
                    __typename
                    ...on LoginRegistry {
                        user_id
                        created_at
                    }
                }
            }
        `

        const registrationResponse = await Api.graphql(registrationQuery, undefined);
        if (!registrationResponse.data) {throw new Error("500::::data error");}


        if (registrationResponse.data.loginRegistration.__typename !== "LoginRegistry") {
            throw new Error("401::::" + registrationResponse.data ? registrationResponse.data.loginRegistration : (registrationResponse as any).errors);
        }


        // setting the cookies and returning
        const csrfToken = crypto.randomUUID();

        res.setHeader(
            "Set-Cookie", [
                `access_token=${access_token}; HttpOnly; Secure; Path=/; SameSite=Lax`,
                `id_token=${id_token}; HttpOnly; Secure; Path=/; SameSite=Lax`,
                `csrf_token=${csrfToken}; HttpOnly; Secure; Path=/; SameSite=Lax`
            ]
        );
        console.log("cookies set")
        res.writeHead(302, {
            Location: `/profile`
        });

        return res.end();
    } catch (err) {
        return RedirectErrorFunction(res, err)
    }
});


export default apiRoute;

