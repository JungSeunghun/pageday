"use client"

import { useRef, MouseEvent } from 'react';
import styles from './popularBooks.module.css';
import Image from 'next/image';

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
          <div className={styles.bookThumbnail}>
            <Image className={styles.bookThumbnailImage} src={"/book/book1.webp"} width={96} height={128} alt='책 표지'/>
          </div>
          <div className={styles.bookTitle}>불편한 편의점</div>
          <div className={styles.bookAuthor}>김호연</div>
        </li>
        <li className={styles.bookItem}>
          <div className={styles.bookThumbnail}>
            <Image className={styles.bookThumbnailImage} src={"/book/book2.webp"} width={96} height={128} alt='책 표지'/>
          </div>
          <div className={styles.bookTitle}>달러구트 꿈 백화점</div>
          <div className={styles.bookAuthor}>이미예</div>
        </li>
        <li className={styles.bookItem}>
          <div className={styles.bookThumbnail}>
            <Image className={styles.bookThumbnailImage} src={"/book/book3.webp"} width={96} height={128} alt='책 표지'/>
          </div>
          <div className={styles.bookTitle}>아몬드</div>
          <div className={styles.bookAuthor}>손원평</div>
        </li>
        <li className={styles.bookItem}>
          <div className={styles.bookThumbnail}>
            <Image className={styles.bookThumbnailImage} src={"/book/book4.webp"} width={96} height={128} alt='책 표지'/>
          </div>
          <div className={styles.bookTitle}>지구 끝의 온실</div>
          <div className={styles.bookAuthor}>김초엽</div>
        </li>
        <li className={styles.bookItem}>
          <div className={styles.bookThumbnail}>
            <Image className={styles.bookThumbnailImage} src={"/book/book5.webp"} width={96} height={128} alt='책 표지'/>
          </div>
          <div className={styles.bookTitle}>종의 기원</div>
          <div className={styles.bookAuthor}>정유정</div>
        </li>
      </ul>
    </div>
  );
}
