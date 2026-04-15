import { NextRequest, NextResponse } from "next/server";
import { globalAPI } from "../globalServer";

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const params = Object.fromEntries(searchParams.entries());
  const response = await globalAPI.get("/game-results", { params });
  return NextResponse.json(response.data);
};

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const response = await globalAPI("/game-results", body);
  return NextResponse.json(response.data);
};
