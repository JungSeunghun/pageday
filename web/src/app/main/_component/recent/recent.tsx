import styles from './recent.module.css'
import Image from 'next/image';

export default function Recent() {
  return (
    <section className={styles.recentRecords}>
      <h2 className={styles.title}>최근 기록</h2>

      <section className={styles.mySection}>
        <h3 className={styles.subtitle}>내 기록</h3>
        <div className={styles.myRecord}>
          <div className={styles.record}>
            <div className={styles.thumbnail}>
              <Image className={styles.thumbnailImage} src={"/book/book1.webp"} width={112} height={112} alt='책 표지'/>
            </div>
            <div className={styles.info}>
              <h3 className={styles.username}>화영</h3>
              <p className={styles.bookName}>불편한 편의점</p>
              <p className={styles.content}>
                엔딩이 조금 아쉽다.<br/>
                뭔가 두루뭉실하게 끝난 느낌.<br/>
                그래도 독고라는 인물의 이야기를 더 듣고 싶다.
              </p>
            </div>
            <div className={styles.day}>2024.06.13</div>
          </div>
        </div>
      </section>

      <section className={styles.userSection}>
        <h3 className={styles.subtitle}>둘러보기</h3>
        <ul className={styles.postList}>
          <li className={styles.postItem}>
            <div className={styles.record}>
              <div className={styles.thumbnail}></div>
              <div className={styles.info}>
                <h3 className={styles.username}>화영</h3>
                <p className={styles.bookName}>책 제목</p>
                <p className={styles.content}>용의자 X의 어쩌구를 읽고 누군가를 확실히 어떻게 머시깽이 해버릴지 알 수 있었다</p>
              </div>
              <div className={styles.day}>2024.06.13</div>
            </div>
          </li>
          <li className={styles.postItem}>
            <div className={styles.record}>
              <div className={styles.thumbnail}></div>
              <div className={styles.info}>
                <h3 className={styles.username}>화영</h3>
                <p className={styles.bookName}>책 제목</p>
                <p className={styles.content}>용의자 X의 어쩌구를 읽고 누군가를 확실히 어떻게 머시깽이 해버릴지 알 수 있었다</p>
              </div>
              <div className={styles.day}>2024.06.13</div>
            </div>
          </li>
          <li className={styles.postItem}>
            <div className={styles.record}>
              <div className={styles.thumbnail}></div>
              <div className={styles.info}>
                <h3 className={styles.username}>화영</h3>
                <p className={styles.bookName}>책 제목</p>
                <p className={styles.content}>용의자 X의 어쩌구를 읽고 누군가를 확실히 어떻게 머시깽이 해버릴지 알 수 있었다</p>
              </div>
              <div className={styles.day}>2024.06.13</div>
            </div>
          </li>
          <li className={styles.postItem}>
            <div className={styles.record}>
              <div className={styles.thumbnail}></div>
              <div className={styles.info}>
                <h3 className={styles.username}>화영</h3>
                <p className={styles.bookName}>책 제목</p>
                <p className={styles.content}>용의자 X의 어쩌구를 읽고 누군가를 확실히 어떻게 머시깽이 해버릴지 알 수 있었다</p>
              </div>
              <div className={styles.day}>2024.06.13</div>
            </div>
          </li>
          <li className={styles.postItem}>
            <div className={styles.record}>
              <div className={styles.thumbnail}></div>
              <div className={styles.info}>
                <h3 className={styles.username}>화영</h3>
                <p className={styles.bookName}>책 제목</p>
                <p className={styles.content}>용의자 X의 어쩌구를 읽고 누군가를 확실히 어떻게 머시깽이 해버릴지 알 수 있었다</p>
              </div>
              <div className={styles.day}>2024.06.13</div>
            </div>
          </li>
        </ul>
      </section>  
    
    </section>
  );
}