import { FetchCsrfToken } from "src/lib/csrf/FetchCsrfToken"

export default function LogoutButton({
    children,
    className: scopedClassName,
}: {
    children: React.ReactNode
    className: string
}): JSX.Element {
    const handleLogout = async () => {
        try {
            const scopedCsrfToken = await FetchCsrfToken()
            if ("error" in scopedCsrfToken) {throw new Error("Error fetching csrf token")}

            const headers = {
                "x-csrf-token": scopedCsrfToken.csrfToken,
            }

            fetch("/api/auth0/logout", {
                method: "GET",
                headers: headers,
            }).then((res) => {
                if (res.status === 200) {
                    res.json().then((data) => {
                        window.location = data.auth0logout
                    })
                }
            });
        } catch(err) {
            alert(err.message)
        }
    }
    return (
        <div className={scopedClassName} onClick={handleLogout}>
            {children}
        </div>
    )
}