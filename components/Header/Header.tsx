"use client";
import Link from "next/link";
import css from "./Header.module.css";
import { useAuthStore } from "@/store/auth-store";
import { useRouter } from "next/navigation";
import { logout } from "@/services/authService";
import { useGameStore } from "@/store/store";

const Header = () => {
  const router = useRouter();
  const clearUser = useAuthStore((s) => s.clearUser);
  const resetLevel = useGameStore((s) => s.resetLevel);

  const isAuth = useAuthStore((s) => s.isAuth);
  const handleLogoutClick = () => {
    clearUser();
    resetLevel();
    logout();
    router.push("/");
  };

  return (
    <header className={css["header"]}>
      <Link className={css["logo"]} href="/">
        Memory Numbers
      </Link>

      <nav className={css["nav"]} aria-label="Основна навігація">
        <Link className={css["nav-link"]} href="/">
          Головна
        </Link>
        {isAuth && (
          <>
            <Link className={css["nav-link"]} href="/game/memories">
              Memory
            </Link>
            <Link className={css["nav-link"]} href="/game/pi">
              Pi
            </Link>
          </>
        )}

        <Link className={css["nav-link"]} href="/leader-board">
          Рейтинг
        </Link>
        {isAuth && (
          <Link className={css["nav-link"]} href="/profile">
            Профіль
          </Link>
        )}
      </nav>

      <div className={css["actions"]}>
        {!isAuth && (
          <>
            <Link className={css["secondary-link"]} href="/auth/login">
              Увійти
            </Link>
            <Link className={css["primary-link"]} href="/auth/register">
              Реєстрація
            </Link>
          </>
        )}
        {isAuth && (
          <button
            className={css["logout-button"]}
            onClick={handleLogoutClick}
            type="button"
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
