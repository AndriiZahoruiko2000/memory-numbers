import LeaderBoard from "@/components/LeaderBoard/LeaderBoard";
import css from "./Page.module.css";

const Page = () => {
  return (
    <div className={css["page"]}>
      <LeaderBoard />
    </div>
  );
};

export default Page;
