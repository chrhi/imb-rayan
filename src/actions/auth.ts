"use server";

import { getJwtSecritKey } from "@/lib/utils";
import { SignJWT } from "jose";
import { nanoid } from "nanoid";

import { cookies } from "next/headers";

export const rootAdminSignInAction = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const token = await new SignJWT({})
    .setProtectedHeader({ alg: "HS256" })
    .setJti(nanoid())
    .setIssuedAt()
    .setExpirationTime("10h")
    .sign(new TextEncoder().encode(getJwtSecritKey()));

  cookies().set({
    name: "admin-access-token",
    value: token,
    secure: process.env.NODE_ENV === "production",
  });
};
