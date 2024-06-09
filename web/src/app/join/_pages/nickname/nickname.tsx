import styles from "./nickname.module.css";

export default function Nickname({handleNext} : {handleNext: () => void}) {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        페이지데이에<br/> 
        가입하신 것을 환영합니다.
      </div>
      <div className={styles.description}>
        닉네임을 입력해주세요.
      </div>
      <div className={styles.inputContainer}>
        <input type="text" className={styles.input}/>
        <div className={styles.inputDescription}>
          닉네임을 최대 8자, 한/영
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handleNext}>다음</button>
      </div>
    </div>
  );
}