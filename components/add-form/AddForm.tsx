"use client";
import styles from "./add-form.module.css";
import { categories } from "@/data/data";
import { addArticles } from "@/controller/news-actions";
import SubmitInput from "./SubmitInput";
import { useActionState } from "react";

const AddForm = () => {
  const [state, formAction] = useActionState(addArticles, { errors: [] });

  return (
    <form className={styles.form} action={formAction}>
      <div className={styles.formGroup}>
        <label htmlFor="title">News Title</label>
        <input type="text" name="title" id="title" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="image">News Image Url</label>
        <input type="text" name="image" id="image" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="content">News Content</label>
        <textarea name="content" id="content" rows={4} required></textarea>
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
        <input type="date" name="date" id="date" required />
      </div>
      <ul>
        {state.errors.map(error => <li key={error} className={styles.errorLists}>{error.toUpperCase()}</li>)}
      </ul>
      <SubmitInput />
    </form>
  )
}

export default AddForm
