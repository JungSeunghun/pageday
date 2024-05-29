import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const Signup: React.FC = () => {
  return (
    <div className={styles.formContainer}>
      <h2>회원가입</h2>
      <form className={styles.form}>
        <input type="text" placeholder="아이디" className={styles.input} />
        <input type="email" placeholder="이메일" className={styles.input} />
        <input type="text" placeholder="닉네임" className={styles.input} />
        <input type="password" placeholder="비밀번호" className={styles.input} />
        <input type="password" placeholder="비밀번호 확인" className={styles.input} />
        <div className={styles.row}>
          <select className={styles.select}>
            <option value="">성별</option>
            <option value="male">남성</option>
            <option value="female">여성</option>
            <option value="other">기타</option>
          </select>
          <input type="number" placeholder="년도" className={styles.input} />
          <input type="number" placeholder="월" className={styles.input} />
          <input type="number" placeholder="일" className={styles.input} />
        </div>
        <div className={styles.row}>
          <input type="number" placeholder="전화번호 (앞자리)" className={styles.input} />
          <input type="number" placeholder="전화번호 (중간)" className={styles.input} />
          <input type="number" placeholder="전화번호 (끝자리)" className={styles.input} />
        </div>
        <button type="submit" className={styles.button}>회원가입</button>
      </form>
      <p>
        이미 계정이 있으신가요?{' '}
          <Link href={"/login"} className={styles.link}>로그인</Link>
      </p>
    </div>
  );
};

export default Signup;
