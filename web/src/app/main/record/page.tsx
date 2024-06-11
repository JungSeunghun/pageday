import Header from './_components/header/header';
import styles from './page.module.css';

export default function Record() {
  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.popularBooks}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>인기도서</h2>
          <span className={styles.sectionSubtitle}>최근 독서 기록이 많아진 책들이에요!</span>
        </div>
        <ul className={styles.bookList}>
          <li className={styles.bookItem}>
            <div className={styles.bookThumbnail}></div>
            <div className={styles.bookTitle}>책 제목</div>
            <div className={styles.bookAuthor}>저자명</div>
          </li>
          <li className={styles.bookItem}>
            <div className={styles.bookThumbnail}></div>
            <div className={styles.bookTitle}>책 제목</div>
            <div className={styles.bookAuthor}>저자명</div>
          </li>
          <li className={styles.bookItem}>
            <div className={styles.bookThumbnail}></div>
            <div className={styles.bookTitle}>책 제목</div>
            <div className={styles.bookAuthor}>저자명</div>
          </li>
          <li className={styles.bookItem}>
            <div className={styles.bookThumbnail}></div>
            <div className={styles.bookTitle}>책 제목</div>
            <div className={styles.bookAuthor}>저자명</div>
          </li>
          <li className={styles.bookItem}>
            <div className={styles.bookThumbnail}></div>
            <div className={styles.bookTitle}>책 제목</div>
            <div className={styles.bookAuthor}>저자명</div>
          </li>
        </ul>
      </div>
      <div className={styles.popularPosts}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>인기글</h2>
          <span className={styles.sectionDate}>24.06.14</span>
        </div>
        <ul className={styles.postList}>
          <li className={styles.postItem}>
            <div className={styles.record}>
              <div className={styles.thumbnail}></div>
              <div className={styles.info}>
                <h3 className={styles.username}>정승훈</h3>
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
                <h3 className={styles.username}>정승훈</h3>
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
                <h3 className={styles.username}>정승훈</h3>
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
                <h3 className={styles.username}>정승훈</h3>
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
                <h3 className={styles.username}>정승훈</h3>
                <p className={styles.bookName}>책 제목</p>
                <p className={styles.content}>용의자 X의 어쩌구를 읽고 누군가를 확실히 어떻게 머시깽이 해버릴지 알 수 있었다</p>
              </div>
              <div className={styles.day}>2024.06.13</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
