"use client"

import { useRef, MouseEvent } from 'react';
import styles from './popularBooks.module.css';

export default function PopularBooks() {
  const listRef = useRef<HTMLUListElement>(null);
  const lastX = useRef<number | null>(null);

  const handleMouseDown = (e: MouseEvent<HTMLUListElement>) => {
    const list = listRef.current;
    if (list) {
      list.dataset.isDragging = 'true';
      list.dataset.startX = String(e.pageX - list.offsetLeft);
      list.dataset.scrollLeft = String(list.scrollLeft);
      lastX.current = e.pageX;
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLUListElement>) => {
    const list = listRef.current;
    if (list && list.dataset.isDragging === 'true') {
      e.preventDefault();
      const startX = Number(list.dataset.startX);
      const scrollLeft = Number(list.dataset.scrollLeft);
      const x = e.pageX - list.offsetLeft;
      const walk = (startX - x);
      list.scrollLeft = scrollLeft + walk;
      lastX.current = e.pageX;
    }
  };

  const handleMouseUp = () => {
    const list = listRef.current;
    if (list) {
      list.dataset.isDragging = 'false';
    }
  };

  const handleMouseLeave = () => {
    const list = listRef.current;
    if (list && list.dataset.isDragging === 'true') {
      list.dataset.isDragging = 'false';
    }
  };

  return (
    <div className={styles.popularBooks}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>인기도서</h2>
        <span className={styles.sectionSubtitle}>최근 독서 기록이 많아진 책들이에요!</span>
      </div>
      <ul 
        className={styles.bookList}
        ref={listRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
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
  );
}
