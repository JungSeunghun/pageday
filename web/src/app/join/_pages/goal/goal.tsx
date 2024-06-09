import styles from "./goal.module.css";

export default function Goal({handleSubmit} : {handleSubmit : () => Promise<void>}) {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        ㅇㅇㅇ님의 멋진 꿈을 이루기 위해<br/> 
        독서 목표를 적어주세요.
      </div>
      <div className={styles.description}>
        매일 독서 목표를 이루며<br/>
        하루하루 성장하세요!
      </div>
      <div className={styles.goalContainer}>
        <div className={styles.goalInputContainer}>
          <div className={styles.goalText}>나는</div>
        </div>
        <div className={styles.goalInputContainer}>
          <input type="text" className={styles.inputAction} placeholder="퇴근 후 샤워"/>
          <span className={styles.goalText}>을(를) 한 다음</span>
        </div>
        <div className={styles.goalInputContainer}>
          <input type="text" className={styles.inputBook} placeholder="위대한 개츠비"/>
          <span className={styles.goalText}>을(를) 읽을 것이다.</span>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handleSubmit}>완료</button>
      </div>
    </div>
  );
}