import styles from "./latest-news.module.css";
import NewsCard from "./news-card/NewsCard";

const articles = [1, 2, 3];

const LatestNews = () => {
  return (
    <div className={styles.latestNews}>
      <div className="container">
        <h2>Latest News Articles</h2>
        <div className={styles.articles}>
          {articles.map(article => <NewsCard key={article} />)}
        </div>
      </div>
    </div>
  )
}

export default LatestNews;
