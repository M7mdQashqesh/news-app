import styles from "../latest-news.module.css";

interface IProps {
isHighlighted: boolean;
}

const NewsCard = (props: IProps) => {
  return (
    <div className={`${styles.newsCard} ${props.isHighlighted ? styles.highlight : ""}`}>
      <div className={styles.info}>
        <h3>Urban Planning</h3>
        <p>
          Explore the recent developments in urban planning as cities expand and adapt to modern challenges
        </p>
        <button>Read more</button>
      </div>
      <div className={styles.background}></div>
    </div>
  )
}

export default NewsCard;
