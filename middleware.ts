export { default } from "next-auth/middleware";

export const config = {
    matcher: [
        "/trips",
        "/reservations",
        "/properties",
        "/favourites",
    ]
}

//to prevent logged out users from accessing other routes