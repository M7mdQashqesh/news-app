import { News } from "@/types";
import { notFound } from "next/navigation";

export const fetchNews = async (category: string) => {
  const response = await fetch(`https://newsapi.org/v2/top-headlines?category=${category.toLowerCase()}&apiKey=8c494736782842908e314311a4ed6ba9`, { method: "GET", cache: "no-store" });

  const newResponse = (await response.json()) as News.IResponse;

  let latestNews: News.Item[] = [];

  if (newResponse.totalResults === 0) notFound();
  else {
    latestNews = newResponse.articles.map(article => (
      {
        id: article.source.id,
        title: article.title,
        content: article.content,
        imageUrl: article.urlToImage,
      }
    ));
  }
  return latestNews;
};

