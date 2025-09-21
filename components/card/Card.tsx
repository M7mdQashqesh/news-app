import { News } from "@/types";
import styles from "./card.module.css";
import Image from "next/image";

interface IProps {
  data: News.ICategory | News.Item
};

const Card = (props: IProps) => {
  return (
    <div className={styles.card}>
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
