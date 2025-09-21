import styles from "./news-list.module.css";
import { fetchNews } from "@/services/fetchNews.services";
import { News } from "@/types";
import Card from "../card/Card";

interface IProps {
  category: string;
};

const NewsList = async (props: IProps) => {
  const latestNews: News.Item[] = await fetchNews(props.category) as News.Item[];

  return (
    <div className={styles.grid}>
      {latestNews.length > 0 ? latestNews.map((news, index) => (
        <Card key={news.id + index} data={news} />
      )) : <div>No Data Found</div>}
    </div>
  )
};

export default NewsList;
