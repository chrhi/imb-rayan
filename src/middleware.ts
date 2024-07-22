import { jwtVerify } from "jose";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getJwtSecritKey, verifyAuth } from "./lib/utils";

export async function middleware(request: NextRequest) {
  const adminAccessToken = request.cookies.get("admin-access-token")?.value;

  if (!adminAccessToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const verifed = await verifyAuth(adminAccessToken).catch((err) => {
    console.error(err);
    return NextResponse.redirect(new URL("/", request.url));
  });

  if (!verifed) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: "/dashboard/:path*",
};
