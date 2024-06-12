"use client";

import { useRouter } from "next/navigation";
import styles from "./loading.module.css";
import Image from "next/image";
import { useEffect } from "react";

export default function Loading() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/main');
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer if the component is unmounted
  }, [router]);
  
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={"/main/textlogo.svg"} width={180} height={52} alt='페이지데이 로고'/>
      </div>
      <div className={styles.description}>
        회원 정보를 세팅 중 입니다.<br/>
        잠시만 기다려 주세요.
      </div>
      <div className={styles.loadingImage}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </div>
  );

}