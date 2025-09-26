import Header from "@/components/header/Header";
import { categories } from "@/data/data";
import styles from "./add-news.module.css";
import { addArticles } from "@/controller/news-actions";

const Page = () => {
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
            <input type="text" name="image" id="image" />
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
