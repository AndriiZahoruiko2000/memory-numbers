"use client";
import { useGameStore } from "@/store/store";
import css from "./NumberButton.module.css";

interface NumberButtonProps {
  number: number;
}

const NumberButton = ({ number }: NumberButtonProps) => {
  const addNumber = useGameStore((s) => s.addNumber);

  const handleClick = () => {
    addNumber(number);
  };

  return (
    <button
      aria-label={`Додати цифру ${number}`}
      className={css["calculator-item"]}
      onClick={handleClick}
      type="button"
    >
      {number}
    </button>
  );
};

export default NumberButton;
