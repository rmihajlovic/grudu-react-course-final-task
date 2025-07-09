import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import UserAvatar from "../user-avatar/UserAvatar";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Link to="/">
          <Logo />
        </Link>

        <div className={styles.avatar}>
          <UserAvatar name="Peter Griffin" />
        </div>
      </div>
    </header>
  );
}
