import Header from "@/components/header/Header";
import styles from "./add-news.module.css";
import AddForm from "@/components/add-form/AddForm";

const Page = () => {
  return (
    <div>
      <Header />
      <div className={`container ${styles.formContainer}`}>
        <h2>Add News</h2>
        <AddForm />
      </div>
    </div>
  )
}

export default Page;
