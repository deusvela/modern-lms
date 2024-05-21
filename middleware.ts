import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    // позволяет вставлять страницы, без защиты с логина пароля для большей популярности
    publicRoutes: ["/api/uploadthing", "/api/webhook"]
});

export const config = {
    matcher: [
        // Exclude files with a "." followed by an extension, which are typically static files.
        // Exclude files in the _next directory, which are Next.js internals.
        "/((?!.+\\.[\\w]+$|_next).*)",
        // Re-include any files in the api or trpc folders that might have an extension
        "/(api|trpc)(.*)"
    ]
};