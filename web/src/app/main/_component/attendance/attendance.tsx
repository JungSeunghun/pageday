import styles from "./attendance.module.css"
import Image from "next/image";

export default function Attendance() {
  return (
    <section className={styles.attendance}>
      <div className={styles.header}>
        <h2 className={styles.attendanceTitle}>출석 도장</h2>
        <button className={styles.viewAll}>전체보기</button>
      </div>
      <div className={styles.dayContainer}>
        {['9', '10', '11', '12', '13', '14', '15'].map((day, index) => (
          <div key={index} className={`${styles.day} ${index % 2 === 0 ? styles.active : ''}`}>
            {day}
          </div>
        ))}
      </div>
    </section>
  );
};