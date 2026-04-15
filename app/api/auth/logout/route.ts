import { NextResponse } from "next/server";
import { globalAPI } from "../../globalServer";
import { cookies } from "next/headers";
import { parse } from "cookie";

export const POST = async () => {
  const response = await globalAPI.post("/auth/logout");
  const cookieStore = await cookies();
  const cookieHeaders = response.headers["set-cookie"];

  if (cookieHeaders) {
    for (const item of cookieHeaders) {
      const cookieObj = parse(item);
      const options = {
        maxAge: Number(cookieObj["Max-Age"]),
        path: cookieObj.path,
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

  return NextResponse.json(response.data);
};
