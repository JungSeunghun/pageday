import styles from './header.module.css';

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerLeftSection}>

      </div>
      <div className={styles.headerRightSection}>
        <header className={styles.header}>
          <h2 className={styles.headerTitle}>
            기록 둘러보기
          </h2>
          <div className={styles.searchBox}>
            <input type="text" className={styles.searchInput} placeholder='책제목을 입력해주세요.'/>
            <button className={styles.searchButton}>
              검색
            </button>
          </div>
        </header>
      </div>
    </div>
  );
}