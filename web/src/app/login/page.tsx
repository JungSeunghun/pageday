import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const Login: React.FC = () => {
  return (
    <div className={styles.formContainer}>
      <h2>로그인</h2>
      <form className={styles.form}>
        <input type="text" placeholder="아이디" className={styles.input} />
        <input type="password" placeholder="비밀번호" className={styles.input} />
        <button type="submit" className={styles.button}>로그인</button>
      </form>
      <p>
        계정이 없으신가요?{' '}
        <Link href="/signup" className={styles.link}>회원가입</Link>
      </p>
    </div>
  );
};

export default Login;
