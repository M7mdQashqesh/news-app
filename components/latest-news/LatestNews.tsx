'use client'
import { useEffect, useState } from "react";
import styles from "./latest-news.module.css";
import NewsCard from "./news-card/NewsCard";

const articles = [1, 2, 3];

const LatestNews = () => {
  const [highlightedIndex, setHighlightedIndex] = useState<number>(0);

  useEffect(() => {
    const highlightInt = setInterval(() => {
      setHighlightedIndex(oldValue => (oldValue < articles.length - 1) ? (oldValue + 1) : 0);
    }, 3000);

    return () => {
      clearInterval(highlightInt);
    }
  }, []);

  return (
    <div className={styles.latestNews}>
      <div className="container">
        <h2>Latest News Articles</h2>
        <div className={styles.articles}>
          {articles.map((article, index) => <NewsCard isHighlighted={highlightedIndex === index} key={article} />)}
        </div>
      </div>
    </div>
  )
}

export default LatestNews;
