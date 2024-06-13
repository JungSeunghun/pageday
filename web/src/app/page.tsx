"use client"

import styles from './page.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Home: React.FC = () => {
  const router = useRouter();

  const handleKakaoLogin = () => {
    // router.push("/api/auth/kakao");
    router.push("/join");
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={"/main/textlogo.svg"} width={180} height={52} alt='페이지데이 로고'/>
      </div>
      <button className={styles.kakaoButton} onClick={handleKakaoLogin}>
        <Image src={"/main/kakaoLogin.png"} width={300} height={42} alt='카카오 로그인 버튼'/>
      </button>
      <div>
        <p className={styles.description}>현재 테스트 중 입니다.</p>
      </div>
    </div>
  );
};

export default Home;
