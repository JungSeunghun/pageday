import Image from 'next/image';
import styles from './page.module.css';

export default function ViewPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.backButton}>
          <Image src={"/icon/back.svg"} width={40} height={40} alt='뒤로가기 버튼' />
        </button>
      </header>
      <div className={styles.contentContainer}>
        <h3 className={styles.username}>
          화영님
        </h3>
        <div className={styles.imageContainer}>
          <div className={styles.contentImageContainer}>
            <Image className={styles.contentImage} src={"/book/book1.webp"} width={360} height={360} alt='이미지' />
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.followButton}>
              팔로우
              <Image src={"/icon/follow.svg"} width={20} height={20} alt='팔로우 아이콘' />
            </button>
            <button className={styles.shareButton}>
              공유하기
              <Image src={"/icon/share.svg"} width={20} height={20} alt='팔로우 아이콘' />
            </button>
            <button className={styles.likeButton}>
              좋아요
              <Image src={"/icon/like.svg"} width={20} height={20} alt='팔로우 아이콘' />
            </button>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.date}>2024.06.13</div>
          <div className={styles.bookTitle}>불편한 편의점</div>
          <div className={styles.content}>
            엔딩이 조금 아쉽다.<br/>
            뭔가 두루뭉실하게 끝난 느낌.<br/>
            그래도 독고라는 인물의 이야기를 더 듣고 싶다.
          </div>
        </div>
        <div className={styles.statsContainer}>
          <div className={styles.likes}>
            <span>좋아요</span>
            <span>0</span>
          </div>
          <div className={styles.shares}>
            <span>공유</span>
            <span>0</span>
          </div>
        </div>
        <div className={styles.similarPosts}>
          <h3>비슷한 기록</h3>
          <ul className={styles.postList}>
            <li className={styles.postItem}>
              <div className={styles.record}>
                <div className={styles.thumbnail}>
                  <Image className={styles.thumbnailImage} src={"/book/book1.webp"} width={112} height={112} alt='책 표지' />
                </div>
                <div className={styles.info}>
                  <h3 className={styles.username}>화영</h3>
                  <p className={styles.bookName}>불편한 편의점</p>
                  <p className={styles.content}>
                    엔딩이 조금 아쉽다.<br />
                    뭔가 두루뭉실하게 끝난 느낌.<br />
                    그래도 독고라는 인물의 이야기를 더 듣고 싶다.
                  </p>
                </div>
                <div className={styles.day}>2024.06.13</div>
              </div>
            </li>
            <li className={styles.postItem}>
              <div className={styles.record}>
                <div className={styles.thumbnail}>
                  <Image className={styles.thumbnailImage} src={"/book/book2.webp"} width={112} height={112} alt='책 표지' />
                </div>
                <div className={styles.info}>
                  <h3 className={styles.username}>오현</h3>
                  <p className={styles.bookName}>달러구트 꿈 백화점</p>
                  <p className={styles.content}>
                    하루만에 완독할 정도로 재미있었다.<br />
                    한편의 동화 같은 소설이어서 포근하기도 하고 슬프기도 했다.<br />
                    꿈을 이렇게 재밌고 독특하게 풀어냈다니.
                  </p>
                </div>
                <div className={styles.day}>2024.06.13</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}