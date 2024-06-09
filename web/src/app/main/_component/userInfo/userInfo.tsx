import styles from "./userInfo.module.css"

export default function UserInfo() {
  return (
    <div className={styles.userInfo}>
      <h1 className={styles.userName}>
        애꾸눈해적 <span className={styles.honorifics}>님</span>
      </h1>
      <p className={styles.date}>2024.06.14</p>
    </div>
  );
};