import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className={styles.content}>
       <header className={styles.header}>
        <p className={styles.subTitle}>
          PAGEDAY와 함께<br/>
          <span className={styles.highlight}>평생가는 독서습관</span>을 만들어 보세요!
        </p>
        <h3 className={styles.title}>
          작심 <span className={styles.highlight}>3</span>일 <span className={styles.highlight}>독서 챌린지</span>
        </h3>
        <p className={styles.description}>
          올바른 독서법과 습관형성을 도와드립니다.
        </p>
      </header>
      <div className={styles.section}>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSckBwRbjkkpR8bhT3neOxhyUxyBTL-qWSJiIYoABtJFZ1shoQ/viewform" target="_blank">
          <Image src="/main/main.webp" alt="main" width={400} height={400} className={styles.image} />
        </Link>
      </div>
      <div className={styles.iconSection}>
        <div className={styles.icon}>
          <Link href="https://www.instagram.com/pageday.page/" target="_blank">
            <Image src="/icon/instagram.svg" alt="instagram" width={32} height={32} />
          </Link>
        </div>
        <div className={styles.icon}>
          <Link href="https://open.kakao.com/o/g9XX3Bmg" target="_blank">
            <Image src="/icon/kakao.svg" alt="kakao" width={32} height={32} />
          </Link>
        </div>
        <div className={styles.icon}>
          <Link href="https://pageday.tistory.com/" target="_blank">
            <Image src="/icon/tistory.svg" alt="tistory" width={32} height={32} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
