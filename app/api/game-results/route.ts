import { NextRequest, NextResponse } from "next/server";
import { globalAPI } from "../globalServer";
import { AxiosError } from "axios";
import { cookies } from "next/headers";

export const GET = async (req: NextRequest) => {
  try {
    const cookieStore = await cookies();
    const searchParams = req.nextUrl.searchParams;
    const params = Object.fromEntries(searchParams.entries());
    const response = await globalAPI.get("/game-results", {
      params,
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

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const cookieStore = await cookies();
  const response = await globalAPI.post("/game-results", body, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return NextResponse.json(response.data);
};
