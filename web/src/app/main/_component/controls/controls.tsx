import styles from './controls.module.css'

export default function Controls() {
  return (
    <section className={styles.controls}>
      <button>독서 시작하기<br/>(스톱워치)</button>
      <button>독서 알림 설정</button>
      <button>독서 기록 하기</button>
    </section>
  );
}