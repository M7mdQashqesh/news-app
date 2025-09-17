import styles from "./header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.logo}>
          <img src="/logo.png" />
        </div>

        <nav className={styles.navbar}>
          <Link className={styles.selected} href={"/"}>Home</Link>
          <Link href={"/"}>Add News</Link>
          <Link href={"/"}>Categories</Link>
          <Link href={"/"}>Admin</Link>
        </nav>
      </div>
    </div>
  )
}

export default Header;
