import { User } from "@/types/auth";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthStoreResponse {
  user: User | null;
  isAuth: boolean;
  setUser: (newUser: User) => void;
  clearUser: () => void;
}

export const useAuthStore = create<AuthStoreResponse>()((setStore) => {
  return {
    user: null,
    isAuth: false,
    setUser: (newUser: User) => {
      setStore((s) => {
        return { user: newUser, isAuth: true };
      });
    },
    clearUser: () => {
      setStore((s) => {
        return { user: null, isAuth: false };
      });
    },
  };
});
