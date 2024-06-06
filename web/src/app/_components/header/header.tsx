"use client"

import styles from './header.module.css'
import { useAuth } from "@/app/_context/AuthContext";
import Link from "next/link";
import Image from 'next/image';

export default function Header() {
  const { isSignin, signout } = useAuth();

  return (
    <header className={styles.header}>
      <Link href="/">
        <Image className={styles.logo} src={'/header/logo.svg'} alt={""} width={102} height={32} />
      </Link>
      <nav>
        {isSignin ? (
          <a href="#" onClick={signout}>로그아웃</a>
        ) : (
          <>
            {/* <Link href="/signin">로그인</Link> */}
            {/* <Link href="/signup">회원가입</Link> */}
          </>
        )}
      </nav>
    </header>
  );
}
