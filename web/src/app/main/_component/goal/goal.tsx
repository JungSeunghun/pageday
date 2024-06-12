"use client";

import { useState } from 'react';
import styles from './goal.module.css';

export default function Goal() {
  const [todayAction, setTodayAction] = useState('퇴근 후 샤워');
  const [todayBook, setTodayBook] = useState('어린 왕자');

  const handleTodayGoalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodayAction(event.target.value);
  }

  const handleTodayBookChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodayBook(event.target.value);
  };

  return (
    <section className={styles.goalContainer}>
      <h2 className={styles.title}>목표</h2>
      <div className={styles.goal}>
        <div className={styles.dayContainer}>
          <h2 className={styles.dayName}>오늘</h2>
          <p className={styles.day}>2024.06.13</p>
        </div>
        <div className={styles.inputGroupSection}>
          <div className={styles.inputGroup}>
            <input
              className={styles.todayInput}
              type='text'
              placeholder='독서 전 행동'
              value={todayAction}
              onChange={handleTodayGoalChange}
            />
            <span className={styles.description}>을(를) 한 다음</span>
          </div>
          <div className={styles.inputGroup}>
            <input
              className={styles.todayInput}
              type='text'
              placeholder='읽을 책'
              value={todayBook}
              onChange={handleTodayBookChange}
            />
            <span className={styles.description}>을(를) 읽을 것 이다.</span>
          </div>
        </div>
      </div>
    </section>
  );
}