"use client";
import { useQuery } from "@tanstack/react-query";
import css from "./UserResult.module.css";
import { getResults } from "@/services/gameService";

const UserResult = () => {
  const gameResultQuery = useQuery({
    queryKey: ["userGameResult"],
    queryFn: () => getResults(),
  });

  const results = gameResultQuery.data || [];

  return (
    <section className={css["user-result"]} aria-label="Історія результатів">
      <div className={css["header"]}>
        <div>
          <h2>Історія тренувань</h2>
          <p>Твої збережені спроби із запам&apos;ятовування чисел.</p>
        </div>
        <span className={css["total"]}>{results.length} спроб</span>
      </div>

      {gameResultQuery.isLoading && (
        <p className={css["status"]}>Завантажуємо результати...</p>
      )}

      {gameResultQuery.isError && (
        <p className={css["status"]} role="alert">
          Не вдалося завантажити історію. Спробуй оновити сторінку.
        </p>
      )}

      {!gameResultQuery.isLoading && !gameResultQuery.isError && (
        <>
          {results.length > 0 ? (
            <ol className={css["list"]}>
              {results.map((result, index) => {
                const date = new Date(result.createdAt).toLocaleDateString(
                  "uk-UA",
                  {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  },
                );

                return (
                  <li
                    className={css["row"]}
                    key={`${result.createdAt}-${result.numberLength}-${index}`}
                  >
                    <span className={css["attempt"]}>#{index + 1}</span>
                    <span className={css["date"]}>{date}</span>
                    <span className={css["score"]}>
                      {result.numberLength}
                      <span> цифр</span>
                    </span>
                  </li>
                );
              })}
            </ol>
          ) : (
            <p className={css["status"]}>
              Тут з&apos;являться результати після першої збереженої гри.
            </p>
          )}
        </>
      )}
    </section>
  );
};

export default UserResult;
