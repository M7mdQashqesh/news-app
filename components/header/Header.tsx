import Image from "next/image";
import styles from "./header.module.css";
import NavLink from "./nav-link/NavLink";
import logo from "@/public/logo.png";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" width={130} />
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
