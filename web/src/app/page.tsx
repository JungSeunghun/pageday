"use client"

import styles from './page.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Home: React.FC = () => {
  const router = useRouter();

  const handleKakaoLogin = () => {
    router.push("/api/auth/kakao");
    // const popup = window.open(
    //   '/api/auth/kakao',
    //   'kakaoLogin',
    //   'width=600,height=800'
    // );
  };
  

  
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={"/main/textlogo.svg"} width={180} height={52} alt='페이지데이 로고'/>
      </div>
      <button onClick={handleKakaoLogin}>
        <Image src={"/main/kakaoLogin.png"} width={300} height={42} alt='카카오 로그인 버튼'/>
      </button>
    </div>
  );
};

export default Home;
