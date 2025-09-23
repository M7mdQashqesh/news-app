import LatestNews from '@/components/latest-news/LatestNews';
import { fetchNews } from '@/services/fetchNews.services';

const Page = async () => {
  const latestHealthNews = (await fetchNews("health")).slice(0, 3);

  if (!latestHealthNews.length) return null;
  else 
  return (
    <LatestNews latestNews={latestHealthNews} category='Health' />
  )
}

export default Page
