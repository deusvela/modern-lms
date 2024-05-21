import { createUploadthing, type FileRouter } from "uploadthing/next";
import { auth } from "@clerk/nextjs"
import { isTeacher } from "@/lib/teacher";

const f = createUploadthing();

const handleAuth = () => {
    const { userId } = auth();
    if (!userId || !isTeacher(userId)) throw new Error("Неавторизованный");
    return { userId };
}

export const ourFileRouter = {
    courseImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
        .middleware(() => handleAuth())
        .onUploadComplete(() => { }),
    courseAttachment: f(["text", "image", "video", "audio", "pdf"])
        .middleware(() => handleAuth())
        .onUploadComplete(() => { }),
    chapterVideo: f({ video: { maxFileCount: 1, maxFileSize: "256MB" } })
        .middleware(() => handleAuth())
        .onUploadComplete(() => { })
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;