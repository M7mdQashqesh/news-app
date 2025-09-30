import styles from './login.module.css';
import LoginForm from '@/components/login-form/LoginForm';

export default function LoginPage() {
  return (
    <div className={`container ${styles.loginPage}`}>
      <h1 className={styles.title}>Login</h1>
      <p>Sign in to your account to continue</p>
      <LoginForm />
    </div>
  );
}
