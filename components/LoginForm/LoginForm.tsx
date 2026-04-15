"use client";
import { useAuthStore } from "@/store/auth-store";
import css from "./LoginForm.module.css";
import { login } from "@/services/authService";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const setUser = useAuthStore((s) => s.setUser);
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    const userData = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const response = await login(userData);
    console.log(response);

    setUser(response);
    router.push("/");
  };

  return (
    <div className={css["loginForm"]}>
      <form action={handleSubmit}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
