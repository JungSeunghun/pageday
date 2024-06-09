import styles from "./info.module.css";

export default function Info({handleNext} : {handleNext: () => void}) {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        열정이 넘치는<br/> 
        ㅇㅇㅇ님<br/>
        안녕하세요.
      </div>
      <div className={styles.description}>
        간단한 회원정보를 입력해주세요.
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.inputRow}>
          <span className={styles.inputLabel}>성별</span>
          <input type="text" className={styles.input}/>
        </div>
        <div className={styles.inputRow}>
          <span className={styles.inputLabel}>직업</span>
          <input type="text" className={styles.input}/>
        </div>
        <div className={styles.inputRow}>
          <span className={styles.inputLabel}>나이</span>
          <input type="text" className={styles.input}/>
        </div>
        <div className={styles.inputRow}>
          <span className={styles.inputLabel}>관심분야</span>
          <input type="text" className={styles.input}/>
        </div>
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