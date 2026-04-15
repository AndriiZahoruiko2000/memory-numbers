import RegisterForm from "@/components/RegisterForm/RegisterForm";
import css from "./Page.module.css";

const Page = () => {
  return (
    <div className={css["page"]}>
      <RegisterForm />
    </div>
  );
};

export default Page;
