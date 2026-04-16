"use client";
import { useEffect, useState } from "react";
import css from "./RandomNumbers.module.css";
import { useGameStore } from "@/store/store";

interface RandomNumbersProps {
  isPiPage?: boolean;
}

const RandomNumbers = ({ isPiPage }: RandomNumbersProps) => {
  const [counter, setCounter] = useState(10);

  const generateNumber = useGameStore((s) => s.generateNumber);
  const setPi = useGameStore((s) => s.setPi);
  const number = useGameStore((s) => s.number);
  const level = useGameStore((s) => s.level);
  const startTimer = useGameStore((s) => s.startTimer);
  const stopTimer = useGameStore((s) => s.stopTimer);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCounter(counter - 1);
    }, 1000);

    if (counter > 0) {
      return () => clearTimeout(timeout);
    }

    clearTimeout(timeout);
    if (counter === 0) {
      stopTimer();
    }

    return undefined;
  }, [counter, stopTimer]);

  useEffect(() => {
    if (isPiPage) {
      setPi();
    } else {
      generateNumber();
    }

    startTimer();
  }, [generateNumber, startTimer]);

  return (
    <section className={css["randomNumbers"]} aria-live="polite">
      <p className={css["label"]}>Число для запам&apos;ятовування</p>
      <div className={css["number"]}>{number}</div>
      <div className={css["meta"]}>
        <span>Рівень {level}</span>
        <span>{counter} сек</span>
        <button
          className={css["skip-button"]}
          onClick={stopTimer}
          type="button"
        >
          Скіп
        </button>
      </div>
    </section>
  );
};

export default RandomNumbers;
