import Trigger from './_component/trigger/trigger';
import styles from './page.module.css'

export default function Main() {
  return (
    <>
      <Trigger/>

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

      <section className={styles.controls}>
        <button>독서 시작하기 (스톰위치)</button>
        <button>독서 알림 설정</button>
        <button>독서 기록 하기</button>
      </section>

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
    </>
  );
}