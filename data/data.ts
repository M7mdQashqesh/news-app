import { News } from "@/types";
import businessImg from "@/public/business.webp";
import entertainmentImg from "@/public/entertainment.webp";
import healthImg from "@/public/health.webp";
import scienceImg from "@/public/science.webp";
import sportsImg from "@/public/sports.webp";
import technologyImg from "@/public/technology.webp";

export const categories: News.ICategory[] = [
  {
    title: "Business",
    imageUrl: businessImg.src,
    content:
      "Stay informed about the latest business trends and financial news.",
  },
  {
    title: "Entertainment",
    imageUrl: entertainmentImg.src,
    content:
      "Get your daily dose of celebrity gossip, movie reviews, and music updates.",
  },
  {
    title: "Health",
    imageUrl: healthImg.src,
    content:
      "Discover the newest breakthroughs in health and wellness, and get tips for a healthier lifestyle.",
  },
  {
    title: "Science",
    imageUrl: scienceImg.src,
    content:
      "Explore the wonders of the universe and the latest scientific discoveries.",
  },
  {
    title: "Sports",
    imageUrl: sportsImg.src,
    content:
      "Catch up on all the scores, highlights, and news from the world of sports.",
  },
  {
    title: "Technology",
    imageUrl: technologyImg.src,
    content: "Keep up with the fast-paced world of technology, from gadgets to AI.",
  },
];
