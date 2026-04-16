"use client";

import Link from "next/link";
import css from "./Error.module.css";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  return (
    <main className={css["page"]}>
      <section className={css["error"]} aria-labelledby="error-title">
        <p className={css["eyebrow"]}>Помилка</p>
        <h1 id="error-title">Щось пішло не так</h1>
        <p className={css["description"]}>
          Сторінка не змогла завантажитися. Спробуй повторити дію або
          повернись на головну.
        </p>

        {error.digest && (
          <p className={css["code"]}>Код помилки: {error.digest}</p>
        )}

        <div className={css["actions"]}>
          <button className={css["primaryButton"]} onClick={reset}>
            Спробувати ще раз
          </button>
          <Link className={css["secondaryButton"]} href="/">
            На головну
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Error;
