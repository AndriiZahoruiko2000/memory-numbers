import { NextResponse } from "next/server";
import { globalAPI } from "../globalServer";
import { AxiosError } from "axios";

export const GET = async () => {
  try {
    const response = await globalAPI.get("/leader-board");
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
