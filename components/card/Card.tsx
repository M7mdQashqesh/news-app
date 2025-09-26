import { News } from "@/types";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  item: News.DBItem;
};

const Card = (props: IProps) => {
  return (
    <div className={styles.card}>
      <Link href={`/news/${props.item?.slug}`}>
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
      </Link>
    </div>
  )
}

export default Card
