import Categories from "@/components/categories/Categories";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import LatestNews from "@/components/latest-news/LatestNews";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <LatestNews />
      <Categories />
    </div>
  );
};

export default Home;
