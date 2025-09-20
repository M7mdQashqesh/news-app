import styles from "./news-list.module.css";
import Header from "@/components/header/Header";
import Card from "@/components/card/Card";
import { News } from "@/types";
import { fetchNews } from "@/services/fetchNews.services";

interface IProps {
  params: Promise<{ category: string }>
}

const Page = async (props: IProps) => {
  const { category } = await props.params;
  const latestNews: News.Item[] = await fetchNews(category) as News.Item[];

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
