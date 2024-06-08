import styles from './mainLeftSection.module.css'

import Image from 'next/image';
import Link from 'next/link';

export default function MainLeftSection() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src="/main/textlogo.svg" alt="로고" width={102} height={32}/>
      </div>
      <div>
        평생의 독서 습관 <br/>
        페이지데이
      </div>
      <div>
        배너
      </div>
      <div>
        꿈을 이루기 위한 하루하루의 독서 습관!
        이제 페이지데이와 함께 일상을 특별하게 만들어보세요.
      </div>
      <ul>
        <li>
          N기 모집 신청하기
        </li>
        <li>
          페이지데이 블로그
        </li>
        <li>
          페이지데이 인스타그램
        </li>
      </ul>
      <div>
        <span>문의</span><span>pagedaypage@gmail.com</span>
      </div>
    </div>
  );
}