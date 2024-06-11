import MainLeftSection from "@/app/_components/mainLeftSection/mainLeftSection";
import styles from "./search.module.css"
import Image from "next/image";

interface SearchModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function SearchModal({isVisible, onClose} : SearchModalProps) {
  if (!isVisible) return null;
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalLeftSection}>
        <MainLeftSection/>
      </div>
      <div className={styles.modalRightSection}>
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeaderSection}>
              <div className={styles.modalHeader}>
                <h2 className={styles.modalTitle}>검색</h2>
                <button onClick={onClose} className={styles.closeButton}>
                  <Image src="/icon/close.svg" width={40} height={40} alt="닫기" />
                </button>
              </div>
              <div className={styles.inputGroup}>
                <input type="text" placeholder="책 제목을 입력해주세요." className={styles.searchInput} />
                <button className={styles.searchButton}>검색</button>
              </div>
            </div>
            <div className={styles.gridContainer}>
              <div className={styles.resultsGrid}>
                {Array.from({ length: 12 }).map((_, index) => (
                  <div key={index} className={styles.bookPlaceholder}>
                    <div className={styles.bookCover} />
                    <div className={styles.bookTitle}>책이름이 들어갈자리</div>
                    <div className={styles.bookAuthor}>저자자리</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.selectButton}>선택하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}