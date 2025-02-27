import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({
    image: { maxFileSize: "32MB", maxFileCount: 20 },
  }).onUploadComplete(async ({ metadata, file }) => {
    return { url: file.url };
  }),
  pdfUploader: f({
    image: { maxFileSize: "128GB", maxFileCount: 1 },
  }).onUploadComplete(async ({ metadata, file }) => {
    return { url: file.url };
  }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
