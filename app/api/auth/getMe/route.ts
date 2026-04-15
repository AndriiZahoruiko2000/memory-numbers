import { NextResponse } from "next/server";
import { globalAPI } from "../../globalServer";

export const GET = async () => {
  const response = await globalAPI.get("/auth/getMe");
  return NextResponse.json(response.data);
};
