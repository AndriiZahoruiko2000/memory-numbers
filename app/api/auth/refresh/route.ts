import { NextResponse } from "next/server";
import { globalAPI } from "../../globalServer";
import { cookies } from "next/headers";
import { parse } from "cookie";

export const POST = async () => {
  const cookieStore = await cookies();

  if (cookieStore.get("accessToken")) {
    return NextResponse.json(true);
  }

  if (!cookieStore.get("refreshToken")) {
    return NextResponse.json(false);
  }

  const response = await globalAPI.post("/auth/refresh");

  const cookieHeaders = response.headers["set-cookie"];

  if (cookieHeaders) {
    for (const item of cookieHeaders) {
      const cookieObj = parse(item);
      const options = {
        maxAge: Number(cookieObj["Max-Age"]),
        path: cookieObj.Path,
        expires: cookieObj.Expires ? new Date(cookieObj.Expires) : undefined,
      };

      if (cookieObj.refreshToken) {
        cookieStore.set("refreshToken", cookieObj.refreshToken, options);
      }

      if (cookieObj.accessToken) {
        cookieStore.set("accessToken", cookieObj.accessToken, options);
      }
    }
  }

  return NextResponse.json(true);
};
