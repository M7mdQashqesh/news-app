"use client";
import { News } from "@/types";
import styles from "./category.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface IProps {
  category: News.ICategory
};

const Category = (props: IProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/news-list/${props.category.title.toLowerCase()}`);
  };

  return (
    <div onClick={handleClick} className={styles.category}>
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
    </div>
  )
}

export default Category;
