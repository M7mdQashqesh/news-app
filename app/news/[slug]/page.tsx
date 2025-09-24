import styles from "./page.module.css";
import { getNewsByArticle } from "@/services/fetchNews.services";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  params: Promise<{ slug: string }>;
}

const Page = async (props: IProps) => {
  const { slug } = await props.params;
  const article = getNewsByArticle(slug);
  console.log(article);


  return (
    <div className={styles.articleContainer}>
      <Link href={`/news-list/${article.category}`}>{"<"} Go Back</Link>
      <br />
      <br />
      <h1 className={styles.articleTitle}>{article.title}</h1>
      <div className={styles.articleMeta}>
        <span><b>Author: </b>{article.author} | </span>
        <span><b>Created At: </b>{new Date(article.created_date).toLocaleString()}</span>
      </div>
      <Image className={styles.articleImage} src={article.image} alt="article image" width={500} height={150} style={{ objectFit: "cover" }} />
      <p className={styles.articleContent}>{article.content}</p>
    </div>
  )
}

export default Page
