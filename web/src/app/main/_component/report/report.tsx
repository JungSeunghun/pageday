import styles from '../../page.module.css';

export default function Report() {
  return (
    <section className={styles.report}>
      <h2>레포트</h2>
      <p>2024년 5월 21일 기준 오늘까지 평균보다 1회 더 독서 목표를 달성했어요!</p>
      <div className={styles.progress}>
        <span>평균 독서 목표 달성률</span>
        <div className={styles.progressBar}>
          <div className={styles.averageProgress} style={{ width: '60%' }}>6/10</div>
        </div>
      </div>
      <div className={styles.progress}>
        <span>내 독서 목표 달성률은 상위 10% 입니다.</span>
        <div className={styles.progressBar}>
          <div className={styles.userProgress} style={{ width: '70%' }}>7/10</div>
        </div>
      </div>
      <div className={styles.readingStats}>
        <span>내 독서량</span>
        <div className={styles.readingBar}>
          <div className={styles.complete}>완독 1</div>
          <div className={styles.inProgress}>진행 1</div>
          <div className={styles.halted}>중단 2</div>
          <div className={styles.waiting}>대기 6</div>
        </div>
      </div>
    </section>
  );
}