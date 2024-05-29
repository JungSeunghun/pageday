import React from 'react';
import styles from './page.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.content}>
      <h2>PageDay</h2>
      <p>
        우리 서비스는 독서 습관을 형성하고 유지하는 데 도움을 줍니다.
        매일 읽고 싶은 책을 선택하고, 목표를 설정하고, 진행 상황을 추적하세요.
      </p>
      <button className={styles.button}>카카오 로그인</button>
    </div>
  );
};

export default Home;
