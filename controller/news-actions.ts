"use server";
import { insertArticle } from "@/services/fetchNews.services";
import { News } from "@/types";
import { redirect } from "next/navigation";
import xss from "xss";

export const addArticles = async (formData: FormData) => {
  const title = xss(formData.get("title")?.toString() || "");

  const article: News.DBItem = {
    title: title || "",
    image: xss(formData.get("image")?.toString() || ""),
    content: xss(formData.get("content")?.toString() || ""),
    author: formData.get("author")?.toString() || "",
    author_email: formData.get("author-email")?.toString() || "",
    category: formData.get("category")?.toString().toLowerCase() || "",
    created_date: Number(formData.get("date")) || Date.now(),
    slug: title?.replaceAll(" ", "-").toLowerCase() || "",
  };

  insertArticle(article);
  redirect(`/news/${article.slug}`);
};
