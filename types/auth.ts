export interface LoginBody {
  email: string;
  password: string;
}

export interface RegisterBody {
  userName: string;
  email: string;
  password: string;
}

export interface User {
  _id: string;
  userName: string;
  email: string;
  result: number;
}
