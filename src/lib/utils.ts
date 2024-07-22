import { type ClassValue, clsx } from "clsx";
import { jwtVerify } from "jose";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getJwtSecritKey() {
  const secret = process.env.JWT_SECRET_KEY;

  if (!secret || secret.length === 0) {
    throw new Error("there is no secret key");
  }

  return secret;
}

export function deleteAllCookies() {
  // Get all the cookies for the current site
  var cookies = document.cookie.split(";");

  // Loop through each cookie and delete it
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;

    // Set the cookie expiration date to the past to delete it
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
  }

  console.log("All cookies deleted.");
}

type TUserJwtPayload = {
  jti: string;
  iat: number;
};

export const verifyAuth = async (token: string) => {
  try {
    const verifed = await jwtVerify(
      token,
      new TextEncoder().encode(getJwtSecritKey())
    );

    return verifed.payload as TUserJwtPayload;
  } catch (err) {
    throw new Error("your token has expired");
  }
};

export function formatBytes(
  bytes: number,
  decimals = 0,
  sizeType: "accurate" | "normal" = "normal"
) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const accurateSizes = ["Bytes", "KiB", "MiB", "GiB", "TiB"];
  if (bytes === 0) return "0 Byte";
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(decimals)} ${
    sizeType === "accurate" ? accurateSizes[i] ?? "Bytest" : sizes[i] ?? "Bytes"
  }`;
}

export function catchError(err: unknown) {
  console.log(err);
  if (err instanceof z.ZodError) {
    const errors = err.issues.map((issue) => {
      return issue.message;
    });
    return toast(errors?.join("\n"));
  } else if (err instanceof Error) {
    console.log("something went wrong");
  } else {
    return toast("Something went wrong, please try again later.");
  }
}

export function isArrayOfFile(files: unknown): files is File[] {
  const isArray = Array.isArray(files);
  if (!isArray) return false;
  return files.every((file) => file instanceof File);
}
