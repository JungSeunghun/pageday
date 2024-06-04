import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <div className={styles.content}>
      <Image src={"/main/main0.png"} alt='main' width={400} height={400}/>
      <Image src={"/main/main1.png"} alt='main' width={400} height={400}/>
    </div>
  );
};

export default Home;
