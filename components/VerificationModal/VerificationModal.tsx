"use client";
import { verifyMe } from "@/services/authService";
import css from "./VerificationModal.module.css";
import { useRouter } from "next/navigation";

interface VerificationModalProps {
  closeModal: () => void;
}

const VerificationModal = ({ closeModal }: VerificationModalProps) => {
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    const verificationData = {
      email: formData.get("email") as string,
      verificationCode: formData.get("verificationCode") as string,
    };
    await verifyMe(verificationData);
    router.push("/auth/login");
  };

  return (
    <div className={css["verificationModalBackdrop"]}>
      <div
        className={css["verificationModal"]}
        role="dialog"
        aria-modal="true"
        aria-labelledby="verification-title"
      >
        <button
          className={css["closeButton"]}
          onClick={closeModal}
          type="button"
          aria-label="Закрити модальне вікно"
        >
          ×
        </button>

        <div className={css["header"]}>
          <p className={css["eyebrow"]}>Підтвердження акаунта</p>
          <h2 id="verification-title">Введи код з email</h2>
          <p>
            Ми надіслали код підтвердження на пошту, яку ти вказав під час
            реєстрації.
          </p>
        </div>

        <form action={handleSubmit} className={css["verificationModalForm"]}>
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
            Код підтвердження
            <input
              type="text"
              name="verificationCode"
              placeholder="123456"
              autoComplete="one-time-code"
              required
            />
          </label>

          <button type="submit">Підтвердити</button>
        </form>
      </div>
    </div>
  );
};

export default VerificationModal;
