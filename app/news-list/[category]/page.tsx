import styles from "./news-list.module.css";
import Header from "@/components/header/Header";
import Card from "@/components/card/Card";
import { News } from "@/types";

interface IProps {
  params: Promise<{ category: string }>
}

const Page = async (props: IProps) => {
  const { category } = await props.params;

  const response = await fetch(`https://newsapi.org/v2/top-headlines?category=${category.toLowerCase()}&apiKey=8c494736782842908e314311a4ed6ba9`, { method: "GET", cache: "no-store" });

  const newResponse = (await response.json()) as News.IResponse;

  const latestNews: News.Item[] = newResponse.articles.map(article => (
    {
      id: article.source.id,
      title: article.title,
      content: article.content,
      imageUrl: article.urlToImage,
    }
  ));

  return (
    <div className={styles.newsList}>
      <Header />
      <div className="container">
        <div>
          <h1>{category} News</h1>
          <div className={styles.grid}>
            {latestNews.map((news, index) => (
              <Card key={news.id + index} title={news.title} content={news.content} imageUrl={news.imageUrl} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
