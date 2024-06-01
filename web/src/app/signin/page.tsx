"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import { useAuth } from '../_context/AuthContext';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await login(username, password);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>로그인</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="아이디" 
          className={styles.input}
          value={username}
          onChange={(e) => setUsername(e.target.value)} />
        <input 
          type="password" 
          placeholder="비밀번호" 
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className={styles.button}>로그인</button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
      <p>
        계정이 없으신가요?{' '}
        <Link href="/signup" className={styles.link}>회원가입</Link>
      </p>
    </div>
  );
};

export default Login;
