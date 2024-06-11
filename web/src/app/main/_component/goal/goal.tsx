import styles from './goal.module.css'

export default function Goal() {
  return (
    <section className={styles.goalContainer}>
      <h2 className={styles.title}>목표</h2>
      <div className={styles.goal}>
        <div className={styles.dayContainer}>
          <h2 className={styles.dayName}>오늘</h2>
          <p className={styles.day}>2024.06.13</p>
        </div>
        <div className={styles.inputGroupSection}>
          <div className={styles.inputGroup}>
            <input className={styles.input} type='text' placeholder='독서 전 행동'/>
            <span className={styles.description}>을(를) 한 다음</span>
          </div>
          <div className={styles.inputGroup}>
            <input className={styles.input} type='text' placeholder='읽을 책'/>
            <span className={styles.description}>을(를) 읽을 것 이다.</span>
          </div>
        </div>
      </div>
      <div className={styles.goal}>
        <div className={styles.dayContainer}>
          <h2 className={styles.dayName}>내일</h2>
          <p className={styles.day}>2024.06.14</p>
        </div>
        <div className={styles.inputGroupSection}>
          <div className={styles.inputGroup}>
            <input className={styles.input} type='text' placeholder='독서 전 행동'/>
            <span className={styles.description}>을(를) 한 다음</span>
          </div>
          <div className={styles.inputGroup}>
            <input className={styles.input} type='text' placeholder='읽을 책'/>
            <span className={styles.description}>을(를) 읽을 것 이다.</span>
          </div>
        </div>
      </div>
    </section>
  );
}