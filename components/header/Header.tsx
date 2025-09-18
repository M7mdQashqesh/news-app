import styles from "./header.module.css";
import NavLink from "./nav-link/NavLink";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.logo}>
          <img src="/logo.png" />
        </div>

        <nav className={styles.navbar}>
          <NavLink href={"/"}>Home</NavLink>
          <NavLink href={"/add-news"}>Add News</NavLink>
          <NavLink href={"/categories"}>Categories</NavLink>
          <NavLink href={"/admin"}>Admin</NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Header;
