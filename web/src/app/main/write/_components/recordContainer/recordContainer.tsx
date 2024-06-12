import styles from './recordContainer.module.css'

export default function Record() {
  return (
    <div className={styles.recordContainer}>
      <h3 className={styles.title}>
        기록에 목표 공개하기
      </h3>
      <div className={styles.goalSection}>
        <div className={styles.goal}>
          <div className={styles.dayContainer}>
            <h2 className={styles.dayName}>오늘의 목표</h2>
          </div>
          <div className={styles.inputGroupSection}>
            <div className={styles.inputGroup}>
              <span className={styles.todayInput}>퇴근 후 샤워를</span>
              <span className={styles.description}>을(를) 한 다음</span>
            </div>
            <div className={styles.inputGroup}>
              <span className={styles.todayInput}>불편한 편의점</span>
              <span className={styles.description}>을(를) 읽을 것 이다.</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.openGoalSection}>
        <h3 className={styles.title}>목표 공개</h3>
        <div className={styles.buttonGroup}>
          <button className={styles.button}>비공개</button>
          <button className={`${styles.button} ${styles.selected}`}>공개</button>
        </div>
      </div>
    </div>
  );
}