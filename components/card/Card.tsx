"use client";
import { News } from "@/types";
import styles from "./card.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface IProps {
  item: News.DBItem;
};

const Card = (props: IProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/news/${props.item?.slug}`);
  };

  return (
    <div onClick={handleClick} className={styles.card}>
      <h3>{props.item.title}</h3>
      {props.item.image !== null && (
        <Image
          src={props.item!.image}
          alt="news-img"
          width={300}
          height={150}
        />
      )}
      <p>{props.item.content}</p>
    </div>
  )
}

export default Card
