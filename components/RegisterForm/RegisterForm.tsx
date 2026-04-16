"use client";

import css from "./RegisterForm.module.css";

import { register } from "@/services/authService";
import Link from "next/link";
import { useState } from "react";
import VerificationModal from "../VerificationModal/VerificationModal";

const RegisterForm = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const showModal = () => {
    setIsOpenModal(true);
  };

  const hideModal = () => {
    setIsOpenModal(false);
  };

  const handleSubmit = async (formData: FormData) => {
    const userData = {
      userName: formData.get("userName") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    await register(userData);
    showModal();
  };

  return (
    <section className={css["registerForm"]} aria-labelledby="register-title">
      <div className={css["header"]}>
        <p className={css["eyebrow"]}>Реєстрація</p>
        <h1 id="register-title">Створи акаунт гравця</h1>
        <p>Зберігай найкращі спроби та потрапляй у рейтинг.</p>
      </div>

      <form action={handleSubmit}>
        <label>
          Ім&apos;я
          <input
            type="text"
            name="userName"
            placeholder="Твоє ім'я"
            autoComplete="username"
            required
          />
        </label>

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
            placeholder="Придумай пароль"
            autoComplete="new-password"
            required
          />
        </label>

        <button type="submit">Зареєструватись</button>
      </form>
      <button
        className={css["verifyButton"]}
        onClick={showModal}
        type="button"
      >
        Підтвердити пошту
      </button>

      <p className={css["footer"]}>
        Вже маєш акаунт? <Link href="/auth/login">Увійти</Link>
      </p>

      {isOpenModal && <VerificationModal closeModal={hideModal} />}
    </section>
  );
};

export default RegisterForm;
