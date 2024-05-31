"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        document.cookie = `authToken=${data.token}; path=/`;
        router.push('/main');
      } else {
        console.error('Login failed', await response.text());
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>로그인</h2>
      <form className={styles.form} onSubmit={handleLogin}>
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
      </form>
      <p>
        계정이 없으신가요?{' '}
        <Link href="/signup" className={styles.link}>회원가입</Link>
      </p>
    </div>
  );
};

export default Login;
