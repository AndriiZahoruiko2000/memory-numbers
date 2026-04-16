import { GameResult, GameResultBody, UpdateGame } from "@/types/game";
import { serverAPI } from "./serviceConfig";
import { User } from "@/types/auth";

interface GameParams {
  page?: number;
  perPage?: number;
}

export const updateResult = async (id: string, body: UpdateGame) => {
  const response = await serverAPI.patch<GameResult>(
    `/game-results/${id}`,
    body,
  );
  return response.data;
};

export const getResults = async (params?: GameParams) => {
  const response = await serverAPI.get<GameResult[]>("/game-results", {
    params,
  });
  return response.data;
};

export const createResult = async (body: GameResultBody) => {
  const response = await serverAPI.post<GameResult>("/game-results", body);
  return response.data;
};
export const deleteResult = async (id: string) => {
  const response = await serverAPI.delete(`/gamne-results/${id}`);
  return response.data;
};

export const getLeaderBoard = async () => {
  const response = await serverAPI.get<User[]>("/leader-board");
  return response.data;
};
