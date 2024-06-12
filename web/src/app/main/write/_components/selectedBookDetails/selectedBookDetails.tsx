import styles from './selectedBookDetails.module.css';
import Image from 'next/image';

interface SelectedBookDetailsProps {
  selectedBook: { title: string; author: string; image: string } | null;
}

export default function SelectedBookDetails({ selectedBook }: SelectedBookDetailsProps) {

  return (
    <div className={styles.bookInfoContainer}>
      <h3 className={styles.title}>독서 시간 / 페이지 작성</h3>
      <div className={styles.bookSection}>
        <div className={styles.bookThumbnail}>
          <button className={styles.bookSearchButton}>
            {selectedBook ? (
              <Image className={styles.bookThumbnailImage} src={selectedBook.image} alt={selectedBook.title} width={96} height={128} />
              ) : (
                <i>
                <Image src="/icon/searchWhite.svg" alt="검색 아이콘" width={24} height={24} />
              </i>
            )}
          </button>
          {selectedBook ? (
            <>
              <div className={styles.bookTitle}>{selectedBook.title}</div>
              <div className={styles.bookAuthor}>{selectedBook.author}</div>
            </>
          ) : (
            <div className={styles.description}>책을 선택해주세요.</div>
            )}
        </div>
        <div className={styles.recordContainer}>
          <div className={styles.buttonGroup}>
            <button className={`${styles.button} ${styles.selected}`}>시간</button>
            <button className={styles.button}>페이지</button>
          </div>
          <div className={styles.inputContainer}>
            <i className={styles.clockIcon}>
              <Image src="/icon/time.svg" alt="시간 아이콘" width={16} height={16} />
            </i>
            <div className={styles.inputGroup}>
              <input className={styles.input} type="text" />
              <span className={styles.text}>시간</span>
            </div>
            <div className={styles.inputGroup}>
              <input className={styles.input} type="text" />
              <span className={styles.text}>분</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}