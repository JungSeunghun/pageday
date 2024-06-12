import { useState } from 'react';
import styles from './search.module.css';
import Image from 'next/image';
import MyBookList from '../../_components/myBookList/myBookList';
import SelectedBookDetails from '../../_components/selectedBookDetails/selectedBookDetails';
import Record from '../../_components/recordContainer/recordContainer';

export default function Search({ handleNext }: { handleNext: () => void }) {
  const [selectedBook, setSelectedBook] = useState<{ title: string; author: string; image: string } | null>(null);

  const handleSelectBook = (book: { title: string; author: string; image: string }) => {
    setSelectedBook(book);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerSection}>
          <h2 className={styles.headerTitle}>업로드 1/2</h2>
          <button className={styles.closeButton}>
            <Image src="/icon/close.svg" width={40} height={40} alt="닫기" />
          </button>
        </div>
      </header>
      <MyBookList handleSelectBook={handleSelectBook} />
      <SelectedBookDetails selectedBook={selectedBook} />
      <Record />
      <div className={styles.buttonGroup}>
        <button className={styles.nextButton} onClick={handleNext}>다음</button>
      </div>
    </div>
  );
}
