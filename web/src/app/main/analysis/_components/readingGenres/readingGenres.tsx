import styles from './readingGenres.module.css'
import Image from 'next/image';

export default function ReadingGenres() {
  return (
    <div className={styles.section}>
      <div className={styles.sectionTitle}>독서 분야</div>
      <div className={styles.chartContainer}>
        <div className={styles.chart}>
          <Image src={"/chart/chart.png"} width={150} height={150} alt='차트'/>
        </div>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <span className={styles.listTitle}>
              1. 문학(소설/시)
            </span>
            <span className={styles.listValue}>
              44.2%
            </span>
          </li>
          <li className={styles.listItem}>
            <span className={styles.listTitle}>
              2. 어학(외국어)
            </span>
            <span className={styles.listValue}>
              22.4%
            </span>
          </li>
          <li className={styles.listItem}>
            <span className={styles.listTitle}>
              3. 자기계발(성공, 처세)
            </span>
            <span className={styles.listValue}>
              18.7%
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}