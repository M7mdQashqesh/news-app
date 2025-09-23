"use client";
import { News } from "@/types";
import styles from "./latest-news.module.css";
import NewsCard from "./news-card/NewsCard";
import { useEffect, useState } from "react";

interface IProps {
  category: string;
  latestNews: News.Item[];
}

const LatestNews = (props: IProps) => {
  const [highlightedIndex, setHighlightedIndex] = useState<number>(0);

  useEffect(() => {
    const highlightInt = setInterval(() => {
      setHighlightedIndex(oldValue => (oldValue < props.latestNews.length - 1) ? (oldValue + 1) : 0);
    }, 3000);

    return () => {
      clearInterval(highlightInt);
    }
  }, []);

  return (
    <div className={styles.latestNews}>
      <div className="container">
        <h2>Latest {props.category} News Articles</h2>
        <div className={styles.articles}>
          {props.latestNews.map((news, index) => <NewsCard data={news} isHighlighted={highlightedIndex === index} key={index} />)}
        </div>
      </div>
    </div>
  )
}

export default LatestNews;
