"use client";
import { useGameStore } from "@/store/store";
import css from "./UserNumbers.module.css";

const UserNumbers = () => {
  const numbers = useGameStore((s) => s.numbers);
  const number = useGameStore((s) => s.number);
  const deleteLastNumbers = useGameStore((s) => s.deleteLastNumber);
  const deleteNumbers = useGameStore((s) => s.deleteNumbers);
  const generateNumber = useGameStore((s) => s.generateNumber);
  const startTimer = useGameStore((s) => s.startTimer);
  const incrementLevel = useGameStore((s) => s.incrementLevel);
  const resetLevel = useGameStore((s) => s.resetLevel);

  const compareNumber = async () => {
    if (number === numbers.join("")) {
      incrementLevel();
      generateNumber();
      startTimer();
    } else {
      const { default: iziToast } = await import("izitoast");
      iziToast.error({ message: "Ha-Ha Looser!" });
      resetLevel();
      generateNumber();
      startTimer();
    }
    deleteNumbers();
  };

  return (
    <section className={css["userNumbers"]} aria-label="Ваша відповідь">
      <div className={css["header"]}>
        <p className={css["label"]}>Введи число</p>
        <span className={css["counter"]}>{numbers.length} цифр</span>
      </div>

      <ul className={css["userNumbers-list"]} aria-label="Введені цифри">
        {numbers.length === 0 && (
          <li className={css["placeholder"]}>Натискай цифри нижче</li>
        )}
        {numbers.map((number, index) => {
          return (
            <li className={css["userNumbers-item"]} key={`${number}-${index}`}>
              {number}
            </li>
          );
        })}
      </ul>

      <div className={css["button-list"]}>
        <button className={css["button"]} onClick={deleteLastNumbers}>
          Delete
        </button>
        <button className={`${css["button"]} ${css["submit"]}`} onClick={compareNumber}>
          Submit
        </button>
        <button className={css["button"]} onClick={deleteNumbers}>
          Delete All
        </button>
      </div>
    </section>
  );
};

export default UserNumbers;
