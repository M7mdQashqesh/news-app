"use client";
import styles from "../header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = (props: IProps) => {
  const pathname = usePathname();

  return (
    <Link className={`${pathname === props.href ? styles.selected : ""}`} href={props.href}>{props.children}</Link>
  )
}

export default NavLink
