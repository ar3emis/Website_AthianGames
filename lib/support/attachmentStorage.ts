import { randomUUID } from "crypto";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import {
  SUPPORT_ATTACHMENT_MAX_FILE_SIZE_BYTES,
  SUPPORT_ATTACHMENT_MAX_FILES,
} from "@/lib/support/attachmentConfig";
import type { SupportTicketAttachment } from "@/types/support";

const UPLOAD_DIR = path.join(process.cwd(), "public", "support-attachments");
const PUBLIC_PREFIX = "/support-attachments";
const ALLOWED_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".gif",
  ".pdf",
  ".txt",
  ".log",
  ".json",
  ".zip",
  ".7z",
]);
const ALLOWED_MIME_TYPES = new Set([
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/webp",
  "image/gif",
  "application/pdf",
  "text/plain",
  "application/json",
  "application/zip",
  "application/x-zip-compressed",
  "application/x-7z-compressed",
  "application/octet-stream",
]);

function sanitizeFileName(name: string) {
  return name.replace(/[^a-zA-Z0-9._-]/g, "_");
}

function validateAttachment(file: File) {
  const extension = path.extname(file.name).toLowerCase();
  const mimeType = file.type || "application/octet-stream";

  if (!ALLOWED_EXTENSIONS.has(extension)) {
    throw new Error(`Unsupported file type for ${file.name}.`);
  }

  if (!ALLOWED_MIME_TYPES.has(mimeType)) {
    throw new Error(`Unsupported file format for ${file.name}.`);
  }

  if (file.size > SUPPORT_ATTACHMENT_MAX_FILE_SIZE_BYTES) {
    throw new Error(`${file.name} is larger than 10MB.`);
  }
}

export async function saveSupportAttachments(files: File[]) {
  const uploadedFiles = files.filter((file) => file.size > 0);

  if (uploadedFiles.length === 0) {
    return [] as Array<Omit<SupportTicketAttachment, "id" | "createdAt">>;
  }

  if (uploadedFiles.length > SUPPORT_ATTACHMENT_MAX_FILES) {
    throw new Error(`You can upload up to ${SUPPORT_ATTACHMENT_MAX_FILES} attachments per reply.`);
  }

  await mkdir(UPLOAD_DIR, { recursive: true });

  const results: Array<Omit<SupportTicketAttachment, "id" | "createdAt">> = [];

  for (const file of uploadedFiles) {
    validateAttachment(file);

    const bytes = await file.arrayBuffer();
    const extension = path.extname(file.name).toLowerCase();
    const safeBaseName = path.basename(sanitizeFileName(file.name), extension);
    const storedFileName = `${Date.now()}_${randomUUID()}_${safeBaseName}${extension}`;
    const savedPath = path.join(UPLOAD_DIR, storedFileName);

    await writeFile(savedPath, Buffer.from(bytes));

    results.push({
      fileName: file.name,
      fileUrl: `${PUBLIC_PREFIX}/${storedFileName}`,
      fileSize: file.size,
      mimeType: file.type || "application/octet-stream",
    });
  }

  return results;
}



