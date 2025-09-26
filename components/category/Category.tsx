import { News } from "@/types";
import styles from "./category.module.css";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  category: News.ICategory
};

const Category = (props: IProps) => {
  return (
    <div className={styles.category}>
      <Link href={`/news-list/${props.category.title.toLowerCase()}`}>
        <h3>{props.category.title}</h3>
        {props.category.image !== null && (
          <Image
            src={props.category.image}
            alt="category-img"
            width={300}
            height={150}
          />
        )}
        <p>{props.category.content}</p>
      </Link>
    </div>
  )
}

export default Category;
