import { useState } from 'react';
import SearchModal from '../../_components/search/search';
import styles from './search.module.css'
import Image from 'next/image';

export default function Search({handleNext} : {handleNext: () => void}) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSearchClick = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  
  const onClose = () => {
    
  };

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerSection}>
            <h2 className={styles.headerTitle}>
              업로드 1/2
            </h2>
            <button onClick={onClose} className={styles.closeButton}>
              <Image src="/icon/close.svg" width={40} height={40} alt="닫기" />
            </button>
          </div>
        </header>
        <div className={styles.bookSection}>
          <button className={styles.bookSearchButton} onClick={handleSearchClick}>
            <i>
              <Image src="/icon/searchWhite.svg" alt="검색 아이콘" width={24} height={24}/>
            </i>
          </button>
          <div className={styles.description}>
            책을 검색해주세요!
          </div>
          <div className={styles.bookTitle}>
            -
          </div>
          <div className={styles.buttonGroup}>
            <button className={styles.button}>시간</button>
            <button className={styles.button}>페이지</button>
          </div>
          <div className={styles.inputContainer}>
            <i className={styles.clockIcon}>
              <Image src="/icon/time.svg" alt="시간 아이콘" width={16} height={16}/>
            </i>
            <div className={styles.inputGroup}>
              <input className={styles.input} type="text"/>
              <span className={styles.text}>시간</span>
            </div>
            <div className={styles.inputGroup}>
              <input className={styles.input} type="text"/>
              <span className={styles.text}>분</span>
            </div>
          </div>
          <div className={styles.buttonGroup}>
            <button className={styles.nextButton} onClick={handleNext}>다음</button>
          </div>
        </div>
      </div>
      <SearchModal isVisible={isModalVisible} onClose={handleCloseModal} />
    </>
  );
}