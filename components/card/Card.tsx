"use client";
import { News } from "@/types";
import styles from "./card.module.css";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

interface IProps {
  data: News.DBItem | News.ICategory;
};

const Card = (props: IProps) => {
  const router = useRouter();
  const path = usePathname();

  const handleClick = () => {
    if (path === "/categories" || path === "/") router.push(`/news-list/${props.data.title.toLowerCase()}`);
  };

  return (
    <div onClick={handleClick} className={styles.card}>
      <h3>{props.data.title}</h3>
      {props.data.image !== null && (
        <Image
          src={props.data.image}
          alt="news-img"
          width={300}
          height={150}
        />
      )}
      <p>{props.data.content}</p>
    </div>
  )
}

export default Card
