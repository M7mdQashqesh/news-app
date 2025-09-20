"use client";
import styles from "./news-list.module.css";
import { useEffect, useState } from "react";
import { News } from "@/types";
import Header from "@/components/header/Header";
import Card from "@/components/card/Card";

interface IProps {
  params: Promise<{ category: string }>
}

const Page = (props: IProps) => {
  const [category, setCategory] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [latestNews, setLatestNews] = useState<News.Item[]>([]);

  const getData = async () => {
    setCategory((await props.params).category);

    if (!category) return;

    fetch(`https://newsapi.org/v2/top-headlines?category=${category.toLowerCase()}&apiKey=1a2e9c49f8e9404abe9189548abf116f`,
      { method: "GET" }).then(res => res.json() as Promise<News.IResponse>)
      .then(res => {
        const newsList: News.Item[] = res.articles.map((result: any) => (
          { id: result.source.id, title: result.title, imageUrl: result.urlToImage, content: result.content }
        ));
        setLatestNews(newsList);
      }

      ).finally(() => setIsLoading(false));
  }

  useEffect(() => {
    getData();
  }, [category]);

  return (
    <div className={styles.newsList}>
      <Header />
      <div className="container">
        {isLoading ? <div className="loader"></div> :
          <div>
            <h1>{category} News</h1>
            <div className={styles.grid}>
              {latestNews.map((news, index) => (
                <Card key={news.id + index} title={news.title} content={news.content} imageUrl={news.imageUrl} />
              ))}
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Page
