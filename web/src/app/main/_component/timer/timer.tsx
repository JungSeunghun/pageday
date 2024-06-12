import styles from "./timer.module.css"
import Image from "next/image";

export default function Timer() {
  return (
    <div className={styles.timer}>
      <button className={styles.timerButton}>
        <Image src={"/icon/play.svg"} width={22} height={24} alt="시작 버튼"/>
        독서 시작하기
      </button>
    </div>
  );
};