import Categories from "@/components/categories/Categories";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Categories caller="home-page" />
    </div>
  );
};

export default Home;
