import styles from './recent.module.css'

export default function Recent() {
  return (
    <section className={styles.recentRecords}>
      <h2 className={styles.title}>최근 기록</h2>

      <section className={styles.mySection}>
        <h3 className={styles.subtitle}>내 기록</h3>
        <div className={styles.record}>
          <div className={styles.thumbnail}>

          </div>
          <div className={styles.info}>
            <h3 className={styles.username}>애꾸눈해적</h3>
            <p className={styles.day}>2024.06.13</p>
            <p className={styles.content}>시집을 읽으니까 마음이 편해진다. 특히 운동주라 더욱 절절한 기분.</p>
          </div>
        </div>
      </section>

      <section className={styles.userSection}>
        <h3 className={styles.subtitle}>둘러보기</h3>
        <div className={styles.record}>
          <div className={styles.thumbnail}>

          </div>
          <div className={styles.info}>
            <h3 className={styles.username}>정승훈</h3>
            <p className={styles.day}>2024.06.13</p>
            <p className={styles.content}>용의자 X의 어쩌구를 읽고 누군가를 확실히 어떻게 머시깽이 해버릴지 알 수 있었다</p>
          </div>
        </div>
        <div className={styles.record}>
          <div className={styles.thumbnail}>

          </div>
          <div className={styles.info}>
            <h3 className={styles.username}>정승훈</h3>
            <p className={styles.day}>2024.06.13</p>
            <p className={styles.content}>용의자 X의 어쩌구를 읽고 누군가를 확실히 어떻게 머시깽이 해버릴지 알 수 있었다</p>
          </div>
        </div>
        <div className={styles.record}>
          <div className={styles.thumbnail}>

          </div>
          <div className={styles.info}>
            <h3 className={styles.username}>정승훈</h3>
            <p className={styles.day}>2024.06.13</p>
            <p className={styles.content}>용의자 X의 어쩌구를 읽고 누군가를 확실히 어떻게 머시깽이 해버릴지 알 수 있었다</p>
          </div>
        </div>
      </section>  
    
    </section>
  );
}