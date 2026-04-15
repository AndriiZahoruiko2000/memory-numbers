import { NextRequest, NextResponse } from "next/server";
import { globalAPI } from "../../globalServer";
import { parse } from "cookie";
import { cookies } from "next/headers";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const response = await globalAPI.post("/auth/login", body);
  const cookieStore = await cookies();
  const cookieHeader = response.headers["set-cookies"];

  if (cookieHeader) {
    for (const item of cookieHeader) {
      const cookieObj = parse(item);
      const options = {
        maxAge: Number(cookieObj["Max-Age"]),
        path: cookieObj.Path,
        expires: cookieObj.Expires ? new Date(cookieObj.Expires) : undefined,
      };
      if (cookieObj.accessToken) {
        cookieStore.set("accessToken", cookieObj.accessToken, options);
      }

      if (cookieObj.refreshToken) {
        cookieStore.set("refreshToken", cookieObj.refreshToken, options);
      }
    }
  }

  return NextResponse.json(response.data);
};
