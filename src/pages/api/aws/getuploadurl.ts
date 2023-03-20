import nextConnect from "next-connect";
import Api from "src/lib/api";
import { getSignedPutObjectUrl } from "src/lib/aws/s3";
import { AuthorizationMiddlewareGen } from "src/lib/middlewares/authorization";
import { getTokenFromCookie } from "src/lib/requestUtils";

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

apiRoute.get( AuthorizationMiddlewareGen([
    "manager",
], true), async (req, res) => {
    try {
        const extension = req.url.split("?")[1]?.split("&").find((item) => item.includes("extension"))?.split("=")[1];
        if (!extension) {
            throw new Error("400::::Extension is required for file");
        }

        if (!["jpg", "jpeg", "png", "gif"].includes(extension)) {
            throw new Error("400::::Extension is not supported");
        }

        const url = await getSignedPutObjectUrl(extension).catch((err) => {
            throw new Error(`500::::Sorry something happened with the aws s3 service`);
        });

        const object = {
            uploadUrl: url,
            imageUrl: url.split("?")[0],
        }

        const accessToken = await getTokenFromCookie(req.headers.cookie, "access_token").catch((err) => {
            throw new Error(`500::::Cookie is not valid`);
        });

        // todo save image in api
        const query = `
            mutation CREATE_IMAGE($accessToken: String!, $url: String!, $name: String!, $description: String!, $tags: [String!]!) {
                createImage(
                    accessToken: $accessToken,
                    name: $name,
                    description: $description,
                    image_url: $url,
                    tags: $tags
                ) {
                    __typename
                    ...on Image {
                        id,
                        user_id,
                        image_url
                    }
                }
            }
            `

        const variables = {
            accessToken,
            url: object.imageUrl,
            name: object.imageUrl,
            description: "test",
            tags: ["tag1", "tag2"],
        }

        const response = await Api.graphql(query, variables).catch((err) => {
            console.log("response", response);
            throw new Error(`500::::Sorry something happened with the api service`);
        });

        if (!response.data || response.data.createImage.__typename !== "Image") {
            console.log("response", response);
            throw new Error(`500::::Sorry something happened with the api service`);
        }


        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(object));
        res.end();
        return
    } catch (err) {
        const [statusCode, message] = err.message.split("::::");
        res.statusCode = parseInt(statusCode);
        res.write(JSON.stringify({ error: message }));
        res.end();
    }
});

export default apiRoute;