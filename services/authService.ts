import { LoginBody, RegisterBody, User, VerifyUser } from "@/types/auth";
import { serverAPI } from "./serviceConfig";

export const login = async (body: LoginBody) => {
  const response = await serverAPI.post<User>("/auth/login", body);
  return response.data;
};

export const register = async (body: RegisterBody) => {
  const response = await serverAPI.post<User>("/auth/register", body);
  return response.data;
};

export const logout = async () => {
  const response = await serverAPI.post("/auth/logout");
  return response.data;
};

export const refresh = async () => {
  const response = await serverAPI.post<Boolean>("/auth/refresh");
  return response.data;
};

export const getMe = async () => {
  const response = await serverAPI.get<User>("/auth/getMe");
  return response.data;
};

export const verifyMe = async (body: VerifyUser) => {
  const response = await serverAPI.post("/auth/verifyMe", body);
  return response.data;
};
