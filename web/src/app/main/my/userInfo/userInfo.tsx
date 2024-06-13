import Image from "next/image";
import styles from "./userInfo.module.css"

export default function UserInfo() {
  return (
    <div className={styles.userInfoContainer}>
      <div className={styles.userProfile}>
        <Image src={"/profile/shim.jpg"} width={102} height={102} alt="프로필" />
      </div>
      <div className={styles.userInfo}>
        <div className={styles.userGrade}>
          <span className={styles.userGradeName}>
            basic
          </span>
          <span className={styles.userUpgrade}>
            upgrade
            <div className={styles.userUpgradeOn}></div>
          </span>
        </div>
        <h3 className={styles.userName}>
          화영 <span className={styles.honorifics}>님</span>
        </h3>
        <p className={styles.comment}>독서를 통해 세상을 바꾸고 싶습니다.</p>
      </div>
    </div>
  );
};