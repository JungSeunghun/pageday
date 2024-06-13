import styles from './readingAction.module.css'

export default function ReadingAction() {
  return (
    <div className={styles.section}>
      <div className={styles.sectionTitle}>독서법 실천 현황</div>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <span>세종대왕 독서법</span><span>3일</span>
        </li>
        <li className={styles.listItem}>
          <span>공부머리 독서법</span><span>2일</span>
        </li>
        <li className={styles.listItem}>
          <span>초격차 독서법</span><span>2일</span>
        </li>
      </ul>
    </div>
  );
}