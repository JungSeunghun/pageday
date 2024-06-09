import styles from "./dream.module.css";

export default function Dream({handleNext} : {handleNext: () => void}) {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        이루고 싶은 꿈을<br/> 
        적어보세요!
      </div>
      <div className={styles.description}>
        꿈은 구체적일수록 좋아요.
      </div>
      <div className={styles.subDescription}>
        (언제까지 + 어떤 목표 이루기)
      </div>
      <div className={styles.textareaContainer}>
        <textarea className={styles.textarea} placeholder="10년 후에 100억 건물주 되기!"/>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handleNext}>다음</button>
      </div>
      <div className={styles.skipButtonContainer}>
        <button className={styles.skipButton}>나중에 입력할게요</button>
      </div>
    </div>
  );
}