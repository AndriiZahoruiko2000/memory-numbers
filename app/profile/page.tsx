import UserProfile from "@/components/UserProfile/UserProfile";
import css from "./Page.module.css";
import UserResult from "@/components/UserResult/UserResult";

const Page = () => {
  return (
    <div className={css["page"]}>
      <main className={css["main"]}>
        <UserProfile />
        <UserResult />
      </main>
    </div>
  );
};

export default Page;
