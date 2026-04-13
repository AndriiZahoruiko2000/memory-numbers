import css from "./Calculator.module.css";
import NumberButton from "./NumberButton/NumberButton";

const Calculator = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <section className={css["calculator"]} aria-label="Клавіатура цифр">
      <ul className={css["calculator-list"]}>
        {numbers.map((number) => (
          <li className={css["calculator-list-item"]} key={number}>
            <NumberButton number={number} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Calculator;
