import { NextRequest, NextResponse } from "next/server";
import { globalAPI } from "../../globalServer";
import { AxiosError } from "axios";

interface PatchProps {
  params: Promise<{ gameId: string }>;
}

export const PATCH = async (req: NextRequest, { params }: PatchProps) => {
  try {
    const body = req.json();
    const { gameId } = await params;
    const response = await globalAPI.patch(`/game-results/${gameId}`, body);
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

export const DELETE = async (req: NextRequest, { params }: PatchProps) => {
  const { gameId } = await params;
  const response = await globalAPI.delete(`/game-results/${gameId}`);
  return NextResponse.json(response.data);
};
