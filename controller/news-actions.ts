"use server";
import { allowedCategories } from "@/data/data";
import { insertArticle } from "@/services/fetchNews.services";
import { News } from "@/types";
import { redirect } from "next/navigation";
import xss from "xss";

export const addArticles = async (prevState: { errors: string[] }, formData: FormData) => {
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

  const errors: string[] = [];

  if (article.title.length < 3) errors.push("the title should be include text more then 3 letter");
  if (!article.image) errors.push("you should add photo url");
  if (!article.content) errors.push("you should add content");
  if (!allowedCategories.includes(article.category)) errors.push("only some categories are allowed");
  if (article.created_date > Date.now()) errors.push("the create date should be in the past time");

  if (errors.length > 0) return {errors};

  insertArticle(article);
  redirect(`/news/${article.slug}`);
};
