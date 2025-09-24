import styles from "./news-list.module.css";
import { getNewsByCategory } from "@/services/fetchNews.services";
import { News } from "@/types";
import Card from "../card/Card";

interface IProps {
  category: string;
};

const NewsList = (props: IProps) => {
  const latestNews = getNewsByCategory(props.category) as News.DBItem[];

  return (
    <div className={styles.grid}>
      {latestNews.length > 0 ? latestNews.map((news, index) => (
        <Card key={news.id + index} item={news} />
      )) : <div>No Data Found</div>}
    </div>
  )
};

export default NewsList;
