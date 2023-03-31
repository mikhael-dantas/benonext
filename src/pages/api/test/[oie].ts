import { IncomingMessage } from "http";
import nextConnect from "next-connect";

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

type reqType = { query: { oie: any; }; } & IncomingMessage;
apiRoute.get(async (
    req: reqType,
    res) => {
        const { oie } = req.query;


        res.statusCode = 200;
        res.write(`hello worldoooouu ${(req as any).query?.oie} ${(req as any).query?.tchau}`);
        res.end();
});

export default apiRoute;