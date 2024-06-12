import styles from "./userInfo.module.css"

export default function UserInfo() {
  return (
    <div className={styles.userInfo}>
      <h1 className={styles.userName}>
        화영 <span className={styles.honorifics}>님</span>
      </h1>
      <p className={styles.date}>2024.06.13</p>
    </div>
  );
};