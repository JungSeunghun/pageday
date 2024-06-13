"use client"

import styles from './editor.module.css'
import Image from 'next/image';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import './quill.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function Editor({handleBack}:{handleBack: () => void}) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerSection}>
          <h2 className={styles.headerTitle}>
            업로드 1/2
          </h2>
          <button onClick={handleBack} className={styles.backButton}>
            <Image src="/icon/back.svg" width={18} height={24} alt="닫기" />
          </button>
        </div>
      </header>
      <div className={styles.infoSection}>
        <h3 className={styles.title}>독서 기록</h3>
        <div className={styles.bookInfoSection}>
          <div className={styles.bookThumbnail}>
            <Image className={styles.bookThumbnailImage} src={"/book/book1.webp"} width={96} height={128} alt='책 표지'/>
          </div>
          <div className={styles.bookInfo}>
            <p className={styles.timeInfo}>
              <i>
                <Image src={"/icon/time.svg"} width={16} height={16} alt="시간 아이콘"/>
              </i>
              <span className={styles.time}>1시간 30분</span>
            </p>
            <p className={styles.bookName}>불편한 편의점</p>
            <p className={styles.authorName}>김호연</p>
          </div>
        </div>
      </div>
      <div className={styles.goalSection}>
        <div className={styles.goal}>
          <div className={styles.dayContainer}>
            <h2 className={styles.dayName}>오늘의 목표</h2>
          </div>
          <div className={styles.inputGroupSection}>
            <div className={styles.inputGroup}>
              <span className={styles.todayInput}>퇴근 후 샤워를</span>
              <span className={styles.description}>을(를) 한 다음</span>
            </div>
            <div className={styles.inputGroup}>
              <span className={styles.todayInput}>불편한 편의점</span>
              <span className={styles.description}>을(를) 읽을 것 이다.</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.editor}>
        <ReactQuill
          // value={value}
          // onChange={onChange}
          theme="snow"
          modules={{
            toolbar: [
              [{ 'header': [1, 2, false] }],
              ['bold', 'italic', 'underline', 'strike'],
              ['image'],
              [{ 'align': [] }],
              [{ 'color': [] }],
            ],
          }}
          className={styles.quillEditor}
          // placeholder={placeholder}
        />
      </div>
      <div className={styles.imageSection}>
        <div className={styles.addImage}>
          <button className={styles.addImageButton}>
            <Image src={"/icon/plus.svg"} width={32} height={32} alt="추가 버튼" />
          </button>
        </div>
        <ul className={styles.imageList}>
          {/* <li>
            <div className={styles.image}>
              <Image className={styles.deleteFile} src={"/icon/deleteFile.svg"} width={16} height={16} alt='파일 삭제 버튼'/>
            </div>
          </li>
          <li>
            <div className={styles.image}>
              <Image className={styles.deleteFile} src={"/icon/deleteFile.svg"} width={16} height={16} alt='파일 삭제 버튼'/>
            </div>
          </li>
          <li>
            <div className={styles.image}>
              <Image className={styles.deleteFile} src={"/icon/deleteFile.svg"} width={16} height={16} alt='파일 삭제 버튼'/>
            </div>
          </li>
          <li>
            <div className={styles.image}>
              <Image className={styles.deleteFile} src={"/icon/deleteFile.svg"} width={16} height={16} alt='파일 삭제 버튼'/>
            </div>
          </li>
          <li>
            <div className={styles.image}>
              <Image className={styles.deleteFile} src={"/icon/deleteFile.svg"} width={16} height={16} alt='파일 삭제 버튼'/>
            </div>
          </li> */}
        </ul>
      </div>
      <div className={styles.recordSection}>
        <h3 className={styles.title}>공개글 여부</h3>
        <div className={styles.recordGroup}>
          <div className={styles.recordTitle}>기록 공개</div>
          <div className={styles.buttonGroup}>
            <button className={styles.disableButton}>비공개</button>
            <button className={styles.enableButton}>공개</button>
          </div>
        </div>
      </div>
      <div className={styles.finishButtonGroup}>
        <button className={styles.finishButton}>완료</button>
      </div>
    </div>
  );
}