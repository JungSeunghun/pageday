import styles from './mainLeftSection.module.css'

import Image from 'next/image';
import Link from 'next/link';

export default function MainLeftSection() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src="/main/textlogo.svg" alt="로고" width={102} height={32} />
      </div>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>평생의 독서 습관</h2>
        <h2 className={styles.subtitle}>페이지데이</h2>
      </div>
      <div className={styles.bannerContainer}>
        <Image className={styles.banner} src="/main/banner.png" alt="배너" layout="responsive" width={528} height={104} />
      </div>
      <div className={styles.description}>
        꿈을 이루기 위한 하루하루의 독서 습관!<br/>
        이제 페이지데이와 함께 일상을 특별하게 만들어보세요.
      </div>
      <ul className={styles.linkList}>
        <li className={styles.linkItem}>
          <Link className={styles.link} href="https://docs.google.com/forms/d/e/1FAIpQLSckBwRbjkkpR8bhT3neOxhyUxyBTL-qWSJiIYoABtJFZ1shoQ/viewform" target="_blank">
            <Image src="/icon/etc.svg" className={styles.linkIcon} alt="모집" width={16} height={16} />
            N기 모집 신청하기
          </Link>
        </li>
        <li className={styles.linkItem}>
          <Link className={styles.link} href="https://pageday.tistory.com/" target="_blank">
            <Image src="/icon/blog.svg" className={styles.linkIcon} alt='블로그' width={16} height={16} />
            페이지데이 블로그
          </Link>
        </li>
        <li className={styles.linkItem}>
          <Link className={styles.link} href="https://www.instagram.com/pageday.page/" target="_blank">
            <Image src="/icon/instagram.svg" className={styles.linkIcon} alt='인스타그램' width={16} height={16} />
            페이지데이 인스타그램
          </Link>
        </li>
      </ul>
      <div className={styles.contactContainer}>
        <span className={styles.contactLabel}>문의</span>|<span className={styles.contactEmail}>pagedaypage@gmail.com</span>
      </div>
    </div>
  );
}