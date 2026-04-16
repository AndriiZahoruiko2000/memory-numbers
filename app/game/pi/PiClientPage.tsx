"use client";

import Calculator from "@/components/Calculator/Calculator";
import css from "./Page.module.css";
import UserNumbers from "@/components/UserNumbers/UserNumbers";
import RandomNumbers from "@/components/RandomNumbers/RandomNumbers";
import { useGameStore } from "@/store/store";
const PiClientPage = () => {
  const isActiveTimer = useGameStore((s) => s.isActiveTimer);
  const level = useGameStore((s) => s.level);

  return (
    <main className={css["page"]}>
      <section className={css["game"]} aria-labelledby="memory-title">
        <header className={css["header"]}>
          <div>
            <p className={css["eyebrow"]}>Memory Numbers</p>
            <h1 className={css["title"]} id="memory-title">
              Запам&apos;ятай число
            </h1>
          </div>

          <div className={css["level"]} aria-label={`Поточний рівень ${level}`}>
            <span className={css["level-label"]}>Рівень</span>
            <strong>{level}</strong>
          </div>
        </header>

        <div className={css["content"]}>
          {isActiveTimer && <RandomNumbers isPiPage={true} />}
          {!isActiveTimer && (
            <div className={css["answer"]}>
              <UserNumbers />
              <Calculator />
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default PiClientPage;
