import { News } from "@/types";
import { notFound } from "next/navigation";

export const fetchNews = async (category: string) => {
  const response = await fetch(`https://newsapi.org/v2/top-headlines?category=${category.toLowerCase()}&apiKey=1ab8f4998cdb48b884fa2922a7675421`, { method: "GET", cache: "no-store" });

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

