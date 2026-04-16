"use client";
import { useQuery } from "@tanstack/react-query";
import css from "./LeaderBoard.module.css";
import { getLeaderBoard } from "@/services/gameService";

const LeaderBoard = () => {
  const resultQuery = useQuery({
    queryKey: ["getResults"],
    queryFn: () => getLeaderBoard(),
  });

  const gameResults = resultQuery.data || [];

  return (
    <main className={css["leader-board"]}>
      <section className={css["hero"]}>
        <p className={css["eyebrow"]}>Таблиця лідерів</p>
        <h1 className={css["title"]}>Рейтинг гравців</h1>
        <p className={css["description"]}>
          Порівнюй найкращі результати та піднімайся вище після кожного
          тренування.
        </p>
      </section>

      <section className={css["board"]} aria-label="Рейтинг гравців">
        <div className={css["board-header"]}>
          <div>
            <h2>Найкращі результати</h2>
            <p>Список оновлюється після збереження нових спроб.</p>
          </div>
          <span className={css["total"]}>{gameResults.length} гравців</span>
        </div>

        {resultQuery.isLoading && (
          <p className={css["status"]}>Завантажуємо рейтинг...</p>
        )}

        {resultQuery.isError && (
          <p className={css["status"]} role="alert">
            Не вдалося завантажити рейтинг. Спробуй оновити сторінку.
          </p>
        )}

        {!resultQuery.isLoading && !resultQuery.isError && (
          <>
            {gameResults.length > 0 ? (
              <ol className={css["list"]}>
                {gameResults.map((result, index) => {
                  const place = index + 1;

                  return (
                    <li className={css["row"]} key={result._id}>
                      <span className={css["rank"]}>{place}</span>
                      <div className={css["player"]}>
                        <span className={css["name"]}>{result.userName}</span>
                        <span className={css["email"]}>{result.email}</span>
                      </div>
                      <span className={css["score"]}>
                        {result.result}
                        <span> цифр</span>
                      </span>
                    </li>
                  );
                })}
              </ol>
            ) : (
              <p className={css["status"]}>
                Рейтинг поки порожній. Збережи перший результат після гри.
              </p>
            )}
          </>
        )}
      </section>
    </main>
  );
};

export default LeaderBoard;
