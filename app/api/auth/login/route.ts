import { NextRequest, NextResponse } from "next/server";
import { globalAPI } from "../../globalServer";
import { parse } from "cookie";
import { cookies } from "next/headers";
import { AxiosError } from "axios";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const response = await globalAPI.post("/auth/login", body);
    const cookieStore = await cookies();
    const cookieHeader = response.headers["set-cookie"];
    console.log(cookieHeader);

    if (cookieHeader) {
      for (const item of cookieHeader) {
        const cookieObj = parse(item);
        console.log(cookieObj);

        const options = {
          maxAge: Number(cookieObj["Max-Age"]),
          path: cookieObj.Path,
          expires: cookieObj.Expires ? new Date(cookieObj.Expires) : undefined,
        };
        if (cookieObj.accessToken) {
          cookieStore.set("accessToken", cookieObj.accessToken, options);
        }

        if (cookieObj.refreshToken) {
          console.log("REFRESH_TOKEN", cookieObj.refreshToken);

          cookieStore.set("refreshToken", cookieObj.refreshToken, options);
        }
      }
    }

    return NextResponse.json(response.data);
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return NextResponse.json(
      {
        message: err.response?.data.message || err.message,
      },
      {
        status: err.status || 500,
      },
    );
  }
};
