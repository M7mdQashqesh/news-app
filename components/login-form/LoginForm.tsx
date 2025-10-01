"use client";
import styles from "./login-form.module.css";
import { redirect } from 'next/navigation';
import toast from 'react-hot-toast';
import jwt from "jsonwebtoken";

const LoginForm = () => {
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
      const token = await res.text();
      const user = jwt.decode(token);
      console.log(user);
      localStorage.setItem("auth-user", JSON.stringify(user));
      redirect("/");
    } else toast.error("Your email or password is invalid");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
  )
}

export default LoginForm
