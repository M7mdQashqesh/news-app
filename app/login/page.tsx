import styles from "./login.module.css";
import LoginForm from '@/components/login-form/LoginForm';

interface IProps {
  searchParams: Promise<{ msg: string }>;
}

const LoginPage = async (props: IProps) => {
  const { msg } = (await props.searchParams);

  return (
    <div className={`container ${styles.loginPage}`}>
      <p style={{ color: 'red' }}>{msg}</p>
      <h1 className={styles.title}>Login</h1>
      <p>Sign in to your account to continue</p>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
