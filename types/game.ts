export interface UpdateGame {
  numberLength: number;
}

export interface GameResult {
  userId: string;
  numberLength: number;
  createdAt: string;
}

export interface GameResultBody {
  numberLength: number;
}
