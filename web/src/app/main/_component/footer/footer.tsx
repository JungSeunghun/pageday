"use client";

import { useState, useEffect } from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeButton, setActiveButton] = useState<string>('');

  useEffect(() => {
    if (pathname.includes('/main/write')) {
      setActiveButton('write');
    } else if (pathname.includes('/main/record')) {
      setActiveButton('record');
    } else if (pathname.includes('/main/analysis')) {
      setActiveButton('analysis');
    } else if (pathname.includes('/main/setting')) {
      setActiveButton('setting');
    } else {
      setActiveButton('home');
    }
  }, [pathname]);

  const handleButtonClick = (button: string) => {
    if (button === 'write') {
      router.push("/main/write");
    } else {
      setActiveButton(button);
      if (button === 'home') {
        router.push("/main");
      } else {
        router.push(`/main/${button}`);
      }
    }
  };

  return (
    <section className={styles.footerSection}>
      <section className={styles.footerLeftSection}></section>
      <section className={styles.footerMainSection}>
        <footer className={styles.footer}>
          <button
            className={`${styles.footerButton} ${activeButton === 'home' ? styles.active : ''}`}
            onClick={() => handleButtonClick('home')}
          >
            <Image src={activeButton === 'home' ? "/icon/homeOn.svg" : "/icon/homeOff.svg"} width={40} height={40} alt="홈 아이콘" />
          </button>
          <button
            className={`${styles.footerButton} ${activeButton === 'record' ? styles.active : ''}`}
            onClick={() => handleButtonClick('record')}
          >
            <Image src={activeButton === 'record' ? "/icon/recordOn.svg" : "/icon/recordOff.svg"} width={40} height={40} alt="기록 아이콘" />
          </button>
          <button
            className={`${styles.footerButton} ${activeButton === 'write' ? styles.active : ''}`}
            onClick={() => handleButtonClick('write')}
          >
            <Image src="/icon/write.svg" width={40} height={40} alt="작성 아이콘" />
          </button>
          <button
            className={`${styles.footerButton} ${activeButton === 'analysis' ? styles.active : ''}`}
            onClick={() => handleButtonClick('analysis')}
          >
            <Image src={activeButton === 'analysis' ? "/icon/analysisOn.svg" : "/icon/analysisOff.svg"} width={40} height={40} alt="분석 아이콘" />
          </button>
          <button
            className={`${styles.footerButton} ${activeButton === 'setting' ? styles.active : ''}`}
            onClick={() => handleButtonClick('setting')}
          >
            <Image src={activeButton === 'setting' ? "/icon/settingOn.svg" : "/icon/settingOff.svg"} width={40} height={40} alt="설정 아이콘" />
          </button>
        </footer>
      </section>
      <section className={styles.footerRightSection}></section>
    </section>
  );
}
