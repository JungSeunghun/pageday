"use client"

import styles from './editor.module.css'
import Image from 'next/image';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import './quill.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function Editor({handleBack}:{handleBack: () => void}) {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerSection}>
            <h2 className={styles.headerTitle}>
              업로드 1/2
            </h2>
            <button onClick={handleBack} className={styles.backButton}>
              <Image src="/icon/back.svg" width={40} height={40} alt="닫기" />
            </button>
          </div>
        </header>
        <div className={styles.infoSection}>
          <div className={styles.bookImage}>

          </div>
          <div className={styles.bookInfo}>
            <p className={styles.timeInfo}>
              <i>
                <Image src={"/icon/time.svg"} width={16} height={16} alt="시간 아이콘"/>
              </i>
              <span className={styles.time}>1시간 30분</span>
            </p>
            <p className={styles.bookName}>책이름이 들어갈 자리</p>
            <p className={styles.authorName}>저자 자리</p>
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
            </li>
            <li>
              <div className={styles.image}>
                <Image className={styles.deleteFile} src={"/icon/deleteFile.svg"} width={16} height={16} alt='파일 삭제 버튼'/>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.recordSection}>
          <div className={styles.recordTitle}>기록 공개여부</div>
          <div className={styles.buttonGroup}>
            <button className={styles.disableButton}>비공개</button>
            <button className={styles.enableButton}>공개</button>
          </div>
        </div>
        <div className={styles.finishButtonGroup}>
          <button className={styles.finishButton}>완료</button>
        </div>
      </div>
    </>
  );
}