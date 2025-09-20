import styles from "./categories.module.css";
import Header from "@/components/header/Header";;
import Link from "next/link";

const categories: string[] = ["Business", "Entertainment", "Health", "Science", "Sports", "Technology"];

const Page = () => {
  return (
    <div className={styles.categories}>
      <Header />
      <div className="container">
        <h2>Categories</h2>
        <div>
          {categories.map(cat => <Link key={cat} href={`/news-list/${cat}`}>{cat}</Link>)}
        </div>
      </div>
    </div>
  )
}

export default Page;
