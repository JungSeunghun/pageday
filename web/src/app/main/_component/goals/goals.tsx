import styles from '../../page.module.css';

export default function Goals() {
  return (
    <section className={styles.goals}>
      <div className={styles.todayGoals}>
        <h2>오늘 목표</h2>
        <ul>
          <li><input type="checkbox" /> 첫번째 목표</li>
          <li><input type="checkbox" /> 두번째 목표</li>
          <li><input type="checkbox" /> 세번째 목표</li>
          <li><input type="checkbox" /> 네번째 목표</li>
        </ul>
        <p>2024.05.21</p>
      </div>

      <div className={styles.tomorrowGoals}>
        <h2>내일 목표</h2>
        <ul>
          <li><input type="checkbox" /> 첫번째 목표</li>
          <li><input type="checkbox" /> 두번째 목표</li>
          <li><input type="checkbox" /> 세번째 목표</li>
          <li><input type="checkbox" /> 네번째 목표</li>
        </ul>
        <p>2024.05.22</p>
      </div>
    </section>
  );
}