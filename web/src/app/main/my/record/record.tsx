import styles from './record.module.css'
import Image from 'next/image';

export default function Record() {
  return (
    <section className={styles.recentRecords}>
      <h2 className={styles.title}>독서 기록</h2>
      <ul className={styles.postList}>
        <li className={styles.postItem}>
          <div className={styles.record}>
            <div className={styles.thumbnail}>
              <Image className={styles.thumbnailImage} src={"/book/book2.webp"} width={112} height={112} alt='책 표지'/>
            </div>
            <div className={styles.info}>
              <h3 className={styles.username}>화영</h3>
              <p className={styles.bookName}>달러구트 꿈 백화점</p>
              <p className={styles.content}>
                하루만에 완독할 정도로 재미있었다.<br/>
                한편의 동화 같은 소설이어서 포근하기도 하고 슬프기도 했다.<br/>
                꿈을 이렇게 재밌고 독특하게 풀어냈다니.
              </p>
            </div>
            <div className={styles.day}>2024.06.13</div>
          </div>
        </li>
        <li className={styles.postItem}>
          <div className={styles.record}>
            <div className={styles.thumbnail}>
              <Image className={styles.thumbnailImage} src={"/book/book3.webp"} width={112} height={112} alt='책 표지'/>
            </div>
            <div className={styles.info}>
              <h3 className={styles.username}>화영</h3>
              <p className={styles.bookName}>아몬드</p>
              <p className={styles.content}>
                책에는 빈 공간이 많기 때문이다.<br/>
                단어 사이도 비어 있고 줄과 줄 사이도 비어 있다.<br/>
                나는 그 안에 들어가 앉거나 걷거나 생각을 적을 수도 ...
              </p>  
            </div>
            <div className={styles.day}>2024.06.13</div>
          </div>
        </li>
        <li className={styles.postItem}>
          <div className={styles.record}>
            <div className={styles.thumbnail}>
              <Image className={styles.thumbnailImage} src={"/book/book4.webp"} width={112} height={112} alt='책 표지'/>
            </div>
            <div className={styles.info}>
              <h3 className={styles.username}>화영</h3>
              <p className={styles.bookName}>지구 끝의 온실</p>
              <p className={styles.content}>
                마음도 감정도 물질적인 것이고,<br/>
                시간의 물줄기를 맞다보면 그 표면이 점차 깎여나가지만,<br/>
                그래도 마지막에는 어떤 핵심이 남잖아요.
              </p>
            </div>
            <div className={styles.day}>2024.06.13</div>
          </div>
        </li>
      </ul>    
    </section>
  );
}