"use client";
import { useEffect } from "react";
import css from "./AuthProvider.module.css";
import { getMe, refresh } from "@/services/authService";
import { useAuthStore } from "@/store/auth-store";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const setUser = useAuthStore((s) => s.setUser);

  useEffect(() => {
    async function fetchUserData() {
      const result = await refresh();
      if (result) {
        const user = await getMe();
        setUser(user);
      }
    }
    fetchUserData();
  }, []);

  return children;
};

export default AuthProvider;
