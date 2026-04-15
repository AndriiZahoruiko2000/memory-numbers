import Link from "next/link";
import css from "./page.module.css";

const Page = () => {
  return (
    <div className={css["page"]}>
      <main className={css["main"]}>
        <section className={css["hero"]}>
          <div className={css["hero-content"]}>
            <p className={css["eyebrow"]}>Тренажер пам&apos;яті</p>
            <h1 className={css["title"]}>
              Запам&apos;ятовуй числа швидше і точніше
            </h1>
            <p className={css["description"]}>
              Тренуй короткочасну пам&apos;ять, проходь вправи з числами та
              відстежуй прогрес у рейтингу.
            </p>

            <div className={css["hero-actions"]}>
              <Link className={css["start-button"]} href="/game/memories">
                Почати гру
              </Link>
              <Link className={css["outline-button"]} href="/leader-board">
                Дивитись рейтинг
              </Link>
            </div>
          </div>

          <div className={css["preview"]} aria-label="Приклад ігрового поля">
            <div className={css["number-grid"]}>
              <span>8</span>
              <span>3</span>
              <span>1</span>
              <span>9</span>
              <span>4</span>
              <span>6</span>
            </div>
            <p className={css["preview-caption"]}>
              00:30 на запам&apos;ятовування
            </p>
          </div>
        </section>

        <section className={css["features"]} aria-label="Переваги">
          <article className={css["feature"]}>
            <span className={css["feature-number"]}>01</span>
            <h2>Швидкий старт</h2>
            <p>Відкрий гру і одразу тренуй запам&apos;ятовування чисел.</p>
          </article>

          <article className={css["feature"]}>
            <span className={css["feature-number"]}>02</span>
            <h2>Результати</h2>
            <p>Зберігай спроби та повертайся до власного прогресу.</p>
          </article>

          <article className={css["feature"]}>
            <span className={css["feature-number"]}>03</span>
            <h2>Рейтинг</h2>
            <p>Порівнюй результати з іншими гравцями.</p>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Page;
