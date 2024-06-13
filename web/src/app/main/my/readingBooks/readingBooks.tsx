"use client"

import { useRef, useState, MouseEvent } from 'react';
import styles from './readingBooks.module.css'
import Image from 'next/image';

export default function ReadingBooks() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
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

  const books = [{
    title: "불편한 편의점",
    author: "김호연",
    image: "/book/book1.webp",
    progressClass: styles.progressBar10
  }, {
    title: "달러구트 꿈 백화점",
    author: "이미예",
    image: "/book/book2.webp",
    progressClass: styles.progressBar30
  }, {
    title: "아몬드",
    author: "손원평",
    image: "/book/book3.webp",
    progressClass: styles.progressBar50
  }, {
    title: "지구 끝의 온실",
    author: "김초엽",
    image: "/book/book4.webp",
    progressClass: styles.progressBar80
  }, {
    title: "종의 기원",
    author: "정유정",
    image: "/book/book5.webp",
    progressClass: styles.progressBar50
  }];

  return (
    <div className={styles.myBookSection}>
      <h3 className={styles.myBookTitle}>내가 읽고 있는 책</h3>
      <ul className={styles.bookList}
        ref={listRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {books.map((book, index) => (
          <li key={index} 
              className={`${styles.bookItem} ${selectedItem === index ? styles.selected : ''}`}
          >
            <div className={styles.bookThumbnail}>
              <Image className={styles.bookThumbnailImage} src={book.image} width={96} height={128} alt='책 표지'/>
            </div>
            <div className={styles.progress}>
              <div className={styles.progressBackground}>
                <div className={`${styles.progressBar} ${book.progressClass}`}></div>
              </div>
            </div>
            <div className={styles.bookTitle}>{book.title}</div>
            <div className={styles.bookAuthor}>{book.author}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}