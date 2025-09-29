"use client";
import { redirect } from 'next/navigation';
import styles from './login.module.css';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget["email"].value;
    const password = e.currentTarget["password"].value;

    const res = await fetch(
      "/api/auth/login",
      {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' }
      });

    if (res.status === 200) {
      const user = await res.json();
      // Store the user in auth context (react context API)
      // and store the user in localStorage
      localStorage.setItem("auth-user", JSON.stringify(user));
      redirect("/");
    } else {
      toast.error("Your email or password is invalid");
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Login</h1>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input type="email" id="email" className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>Password</label>
          <input type="password" id="password" className={styles.input} />
        </div>
        <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
  );
}
