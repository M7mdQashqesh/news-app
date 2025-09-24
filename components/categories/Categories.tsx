import styles from "./categories.module.css";
import { categories } from "@/data/data";
import { News } from "@/types";
import Category from "../category/Category";

const Categories = ({ caller }: { caller: string }) => {
  return (
    <div className={`${caller === "home-page" ? styles.homeCategories : styles.categoriesPage}`}>
      <div className="container">
        <h2>Categories</h2>
        <div className={styles.grid}>
          {categories.map((cat: News.ICategory) => <Category key={cat.title} category={cat} />)}
        </div>
      </div>
    </div>
  )
}

export default Categories;
