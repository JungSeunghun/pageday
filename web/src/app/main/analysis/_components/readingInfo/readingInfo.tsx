import styles from './readingInfo.module.css'

export default function ReadingInfo() {
  return (
    <div className={styles.section}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <span className={styles.listTitle}>
            <span className={styles.listMonth}>6월</span> 출석률
          </span>
          <span className={styles.listValue}>
            95%
          </span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.listTitle}>
            독서 기록
          </span>
          <span className={styles.listValue}>
            7회
          </span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.listTitle}>
            목표 달성
          </span>
          <span className={styles.listValue}>
            6회
          </span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.listTitle}>
            총 독서시간
          </span>
          <span className={styles.listValue}>
            12시간 42분
          </span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.listTitle}>
            총 독서페이지 수
          </span>
          <span className={styles.listValue}>
            321페이지
          </span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.listTitle}>
            독서 완료한 책
          </span>
          <span className={styles.listValue}>
            2권
          </span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.listTitle}>
            독서 중인 책
          </span>
          <span className={styles.listValue}>
            5권
          </span>
        </li>
      </ul>
    </div>
  );
}