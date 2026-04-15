"use client";
import { useAuthStore } from "@/store/auth-store";
import css from "./RegisterForm.module.css";
import { useRouter } from "next/navigation";
import { register } from "@/services/authService";

const RegisterForm = () => {
  const router = useRouter();
  const setUser = useAuthStore((s) => s.setUser);
  const handleSubmit = async (formData: FormData) => {
    const userData = {
      userName: formData.get("userName") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const response = await register(userData);
    setUser(response);
    router.push("/");
  };

  return (
    <div className={css["registerForm"]}>
      <form action={handleSubmit}>
        <input type="text" name="userName" />
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
