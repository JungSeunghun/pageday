import styles from './footer.module.css'
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <section className={styles.footerSection}>
        <section className={styles.footerLeftSection}></section>
        <section className={styles.footerRightSection}>
          <footer className={styles.footer}>
            <button className={styles.footerButton}>
              <Image src="/icon/homeOn.svg" width={40} height={40} alt='홈 아이콘' />
            </button>
            <button className={styles.footerButton}>
              <Image src="/icon/historyOff.svg" width={40} height={40} alt='기록 아이콘' />
            </button>
            <button className={styles.footerButton}>
              <Image src="/icon/write.svg" width={40} height={40} alt='작성 아이콘' />
            </button>
            <button className={styles.footerButton}>
              <Image src="/icon/analysisOff.svg" width={40} height={40} alt='분석 아이콘' />
            </button>
            <button className={styles.footerButton}>
              <Image src="/icon/settingOff.svg" width={40} height={40} alt='설정 아이콘' />
            </button>
          </footer>
        </section>
      </section>
    </>
  );
}