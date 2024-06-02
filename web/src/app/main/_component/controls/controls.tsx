import styles from '../../page.module.css'

export default function Controls() {
  return (
    <section className={styles.controls}>
      <button>독서 시작하기 (스톰위치)</button>
      <button>독서 알림 설정</button>
      <button>독서 기록 하기</button>
    </section>
  );
}