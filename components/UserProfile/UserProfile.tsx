"use client";
import { useAuthStore } from "@/store/auth-store";
import css from "./UserProfile.module.css";

const UserProfile = () => {
  const user = useAuthStore((s) => s.user);

  return (
    <section className={css["user-profile"]} aria-label="Профіль користувача">
      <div className={css["content"]}>
        <p className={css["eyebrow"]}>Особистий кабінет</p>
        <h1 className={css["title"]}>{user?.userName || "Гравець"}</h1>
        <p className={css["email"]}>
          {user?.email || "Увійди в акаунт, щоб бачити свої результати."}
        </p>
      </div>

      <div className={css["best-result"]}>
        <span className={css["label"]}>Найкращий результат</span>
        <strong>{user?.result ?? 0}</strong>
        <span className={css["unit"]}>цифр</span>
      </div>
    </section>
  );
};

export default UserProfile;
