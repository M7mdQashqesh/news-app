import LatestNews from "@/components/latest-news/LatestNews";
import { fetchNews } from "@/services/fetchNews.services";

const Page = async () => {
  const latestSportNews = (await fetchNews("sports")).slice(0, 3);

  if (!latestSportNews.length) return null;
  else
    return (
      <LatestNews latestNews={latestSportNews} category="Sports" />
    )
}

export default Page
