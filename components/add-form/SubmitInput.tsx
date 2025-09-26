"use client";
import styles from "./add-form.module.css";
import { useFormStatus } from "react-dom";

const SubmitInput = () => {
  const { pending } = useFormStatus();
  return (
    <input
      type="submit"
      disabled={pending}
      value={pending ? "Submitting..." : "Add News"}
      className={styles.submitButton}
    />
  )
}

export default SubmitInput
