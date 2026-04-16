import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const proxy = async (req: NextRequest) => {
  console.log("hello proxy");

  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken");
  const refreshToken = cookieStore.get("refreshToken");

  if (accessToken || refreshToken) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/auth/login", req.url));
};

export const config = {
  matcher: ["/game/:path*", "/profile/:path*"],
};
