"use client"

import { useState, useRef, MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import styles from './popularPosts.module.css';
import Image from 'next/image';

export default function PopularPosts() {
  const router = useRouter();
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef<number | null>(null);

  const onHandleClick = (e: MouseEvent<HTMLLIElement>) => {
    if (!isDragging) {
      router.push("/main/record/view");
    }
  };

  const handleMouseDown = (e: MouseEvent<HTMLLIElement>) => {
    startX.current = e.pageX;
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLLIElement>) => {
    if (startX.current !== null && Math.abs(e.pageX - startX.current) > 5) {
      setIsDragging(true);
    }
  };

  const handleMouseUp = () => {
    startX.current = null;
  };

  return (
    <div className={styles.popularPosts}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>인기글</h2>
        <span className={styles.sectionDate}>24.06.14</span>
      </div>
      <ul className={styles.postList}>
        {[
          {
            username: "화영",
            bookName: "불편한 편의점",
            content: "엔딩이 조금 아쉽다.<br/>뭔가 두루뭉실하게 끝난 느낌.<br/>그래도 독고라는 인물의 이야기를 더 듣고 싶다.",
            image: "/book/book1.webp",
            day: "2024.06.13"
          },
          {
            username: "오현",
            bookName: "달러구트 꿈 백화점",
            content: "하루만에 완독할 정도로 재미있었다.<br/>한편의 동화 같은 소설이어서 포근하기도 하고 슬프기도 했다.<br/>꿈을 이렇게 재밌고 독특하게 풀어냈다니.",
            image: "/book/book2.webp",
            day: "2024.06.13"
          },
          {
            username: "지영",
            bookName: "아몬드",
            content: "책에는 빈 공간이 많기 때문이다.<br/>단어 사이도 비어 있고 줄과 줄 사이도 비어 있다.<br/>나는 그 안에 들어가 앉거나 걷거나 생각을 적을 수도 ...",
            image: "/book/book3.webp",
            day: "2024.06.13"
          },
          {
            username: "승훈",
            bookName: "지구 끝의 온실",
            content: "마음도 감정도 물질적인 것이고,<br/>시간의 물줄기를 맞다보면 그 표면이 점차 깎여나가지만,<br/>그래도 마지막에는 어떤 핵심이 남잖아요.",
            image: "/book/book4.webp",
            day: "2024.06.13"
          }
        ].map((post, index) => (
          <li
            key={index}
            className={styles.postItem}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onClick={onHandleClick}
          >
            <div className={styles.record}>
              <div className={styles.thumbnail}>
                <Image className={styles.thumbnailImage} src={post.image} width={112} height={112} alt='책 표지' />
              </div>
              <div className={styles.info}>
                <h3 className={styles.username}>{post.username}</h3>
                <p className={styles.bookName}>{post.bookName}</p>
                <p className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
              <div className={styles.day}>{post.day}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}