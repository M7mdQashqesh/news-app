import Categories from "@/components/categories/Categories";
import styles from "./categories.module.css";
import Header from "@/components/header/Header";

const Page = () => {
  return (
    <div className={styles.categories}>
      <Header />
      <Categories caller="categories-page"/>
    </div>
  )
}

export default Page;
