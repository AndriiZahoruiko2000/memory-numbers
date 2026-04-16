"use client";
import { useAuthStore } from "@/store/auth-store";
import css from "./LoginForm.module.css";
import { login } from "@/services/authService";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {
  const setUser = useAuthStore((s) => s.setUser);
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    const userData = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const response = await login(userData);

    setUser(response);
    router.push("/");
  };

  return (
    <section className={css["loginForm"]} aria-labelledby="login-title">
      <div className={css["header"]}>
        <p className={css["eyebrow"]}>Вхід</p>
        <h1 id="login-title">Повернись до тренувань</h1>
        <p>Увійди в акаунт, щоб зберігати результати та бачити прогрес.</p>
      </div>

      <form action={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="name@example.com"
            autoComplete="email"
            required
          />
        </label>

        <label>
          Пароль
          <input
            type="password"
            name="password"
            placeholder="Введи пароль"
            autoComplete="current-password"
            required
          />
        </label>

        <button type="submit">Увійти</button>
      </form>

      <p className={css["footer"]}>
        Ще немає акаунта? <Link href="/auth/register">Зареєструватись</Link>
      </p>
    </section>
  );
};

export default LoginForm;
