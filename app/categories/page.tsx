"use client";
import styles from "./categories.module.css";
import Header from "@/components/header/Header";
import { News } from "@/types";
import { useEffect, useState } from "react";

const page = () => {
  const [latestNews, setLatestNews] = useState<News.Item[]>([]);

  const getData = () => {
    fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=1a2e9c49f8e9404abe9189548abf116f`,
      { method: "GET" }).then(res => res.json())
      .then(res => {
        const newsList: News.Item[] = res.articles.map((result: any) => (
          {
            id: result.source.id,
            title: result.title,
            imageUrl: result.urlToImage,
            content: result.content
          }
        ));
        setLatestNews(newsList);
      }
      );
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.categories}>
      <Header />
      <div className="container">
        {latestNews.map(news => (
          <div className={styles.news} key={news.content}>
            <h3>{news.title}</h3>
            {news.imageUrl !== null && <img src={news.imageUrl} alt="news-img" width={550} height={150} />}
            <p>{news.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page;
