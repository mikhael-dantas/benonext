import { IncomingMessage } from "http"

export async function getTokenFromCookie(scopedCookie: string,scopedName: string): Promise<string> {
    if (!(scopedCookie)) {throw new Error("400::::No cookie found")}
    const coockiesArray = scopedCookie.split(";")
    const tokenCookie = coockiesArray.find(c => c.trim().startsWith(`${scopedName}=`))
    if (!(tokenCookie)) {throw new Error("400::::Cookie not found")}
    return tokenCookie.split("=")[1]
    
}

export async function getCsrfTokenShortcut(req: IncomingMessage): Promise<string | undefined> {
    const csrfToken = await getTokenFromCookie(req.headers.cookie, "csrf_token").catch((err) => {
        return undefined;
    });
    return csrfToken;
}