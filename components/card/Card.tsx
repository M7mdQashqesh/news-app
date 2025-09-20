import styles from "./card.module.css";
import Image from "next/image";

interface IProps {
  title: string,
  imageUrl: string| null,
  content: string,
};

const Card = (props: IProps) => {
  return (
    <div className={styles.card}>
      <h3>{props.title}</h3>
      {props.imageUrl !== null && (
        <Image
          src={props.imageUrl}
          alt="news-img"
          width={300}
          height={150}
        />
      )}
      <p>{props.content}</p>
    </div>
  )
}

export default Card
