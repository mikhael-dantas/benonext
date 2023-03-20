import { IncomingMessage, ServerResponse } from "http";

export function RedirectErrorFunction(res: ServerResponse<IncomingMessage>, err:any): void {
    console.log(err);
    const [statusCode, message] = err.message.split("::::");
    if (!statusCode || !message) {
        res.statusCode = 500;
        res.write(JSON.stringify({ error: "Sorry something Happened in error information! "}));
        res.end();
        return;
    }
    res.statusCode = parseInt(statusCode);
    res.writeHead(302, {
        Location: `/?error=${message}`
    });
    res.end();
    return;
}