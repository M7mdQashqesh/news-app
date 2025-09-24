import Header from "@/components/header/Header";
import { categories } from "@/data/data";
import styles from "./add-news.module.css";
import { News } from "@/types";

const Page = () => {
  const addArticles = async (formData: FormData) => {
    "use server";
    const article: News.DBItem = {
      title: formData.get("title")?.toString() || "",
      image: formData.get("image")?.toString() || "",
      content: formData.get("content")?.toString() || "",
      author: formData.get("author")?.toString() || "",
      author_email: formData.get("author-email")?.toString() || "",
      category: formData.get("category")?.toString() || "",
      created_date: Number(formData.get("date")) || Date.now(),
      slug: "",
    }

    console.log(article);
  }

  return (
    <div>
      <Header />
      <div className={`container ${styles.formContainer}`}>
        <h2>Add News</h2>
        <form className={styles.form} action={addArticles}>
          <div className={styles.formGroup}>
            <label htmlFor="title">News Title</label>
            <input type="text" name="title" id="title" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="image">News Image Url</label>
            <input type="url" name="image" id="image" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="content">News Content</label>
            <textarea name="content" id="content" rows={4}></textarea>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="category">News Category</label>
            <select name="category" id="category">
              {categories.map(cat => <option key={cat.title} value={cat.title}>{cat.title}</option>)}
            </select>
          </div>
          <input type="hidden" id="author" name="author" value={"John Doe"} />
          <input type="hidden" id="author-email" name="author-email" value={"john.doe@example.com"} />
          <div className={styles.formGroup}>
            <label htmlFor="date">News Created Date</label>
            <input type="date" name="date" id="date" />
          </div>
          <input type="submit" value={"Add News"} className={styles.submitButton} />
        </form>
      </div>
    </div>
  )
}

export default Page;
