import Categories from "@/components/categories/Categories";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page",
  description: "this is home page"
}

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
