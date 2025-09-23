"use client";
import { News } from "@/types";
import styles from "./card.module.css";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

interface IProps {
  data: News.ICategory | News.Item
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
      {props.data.imageUrl !== null && (
        <Image
          src={props.data.imageUrl}
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
