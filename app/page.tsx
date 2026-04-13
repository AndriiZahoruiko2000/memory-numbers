import Link from "next/link";
import css from "./page.module.css";

const Page = () => {
  return (
    <main className={css["page"]}>
      <Link className={css["start-button"]} href="/game/memories">
        Почати гру
      </Link>
    </main>
  );
};

export default Page;
