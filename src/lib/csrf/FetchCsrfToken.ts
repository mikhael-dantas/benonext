
export async function FetchCsrfToken(): Promise<{ csrfToken: string } | {error: string}> {
    const csrfResponse = await fetch("/api/csrf/get-token", {
        credentials: "include",
    })
    const parsedResponse = await csrfResponse.json()

    return {csrfToken: parsedResponse.csrfToken}
}