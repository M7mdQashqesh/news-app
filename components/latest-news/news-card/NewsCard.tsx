import Image from "next/image";
import styles from "../latest-news.module.css";
import urban from "@/public/urban.webp";
import { News } from "@/types";

interface IProps {
  data: News.Item;
  isHighlighted: boolean;
}

const NewsCard = (props: IProps) => {
  return (
    <div className={`${styles.newsCard} ${props.isHighlighted ? styles.highlight : ""}`}>
      <div className={styles.info}>
        <h3>{props.data.title}</h3>
        <p>
          {props.data.content}
        </p>
        <button>Read more</button>
      </div>
      <Image src={props.data.imageUrl ? props.data.imageUrl : urban} width={100} height={100} alt="news-image" layout="responsive" />
    </div>
  )
}

export default NewsCard;
