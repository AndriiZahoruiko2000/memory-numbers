import { NextResponse } from "next/server";
import { globalAPI } from "../../globalServer";
import { AxiosError } from "axios";
import { cookies, headers } from "next/headers";

export const GET = async () => {
  const cookieStore = await cookies();
  try {
    const response = await globalAPI.get("/auth/getMe", {
      headers: {
        Cookie: cookieStore.toString(),
      },
    });
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
