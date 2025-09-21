import styles from "./news-list.module.css";
import { fetchNews } from "@/services/fetchNews.services";
import { News } from "@/types";
import Card from "../card/Card";

interface IProps {
  category: string;
}

const NewsList = async (props: IProps) => {
  const latestNews: News.Item[] = await fetchNews(props.category) as News.Item[];

  return (
    <div className={styles.grid}>
      {latestNews.map((news, index) => (
        <Card key={news.id + index} title={news.title} content={news.content} imageUrl={news.imageUrl} />
      ))}
    </div>
  )
}

export default NewsList
