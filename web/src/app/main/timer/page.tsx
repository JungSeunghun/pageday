"use client"

import { useState, useRef, ChangeEvent } from 'react';
import styles from './page.module.css';
import Header from '../_component/header/header';
import Image from 'next/image';

interface Record {
  action: string;
  book: string;
  time: number;
}

export default function Timer() {
  const [todayAction, setTodayAction] = useState<string>('퇴근 후 샤워');
  const [todayBook, setTodayBook] = useState<string>('어린 왕자');
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [records, setRecords] = useState<Record[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleTodayGoalChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodayAction(event.target.value);
  };

  const handleTodayBookChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodayBook(event.target.value);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const handleStartPause = () => {
    if (isRunning) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    } else {
      const startTime = Date.now() - time;
      timerRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 100);
    }
    setIsRunning(!isRunning);
  };

  const handleApplyRecord = () => {
    setRecords([...records, { action: todayAction, book: todayBook, time }]);
    handleReset();
  };

  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const centiseconds = Math.floor((milliseconds % 1000) / 10);

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(centiseconds).padStart(2, '0')}`;
  };

  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.goalContainer}>
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
      </div>
      <div className={styles.timer}>
        <div className={styles.time}>{formatTime(time)}</div>
        <div className={styles.recordButtonGroup}>
          <button className={styles.resetButton} onClick={handleReset}>
            초기화
          </button>
          <button 
            className={`${isRunning ? styles.pauseButton : styles.startButton}`} 
            onClick={handleStartPause}>
            {isRunning ? (
              <>
              <Image src="/icon/pause.svg" width={22} height={24} alt="일시정지 버튼" /> 정지
            </>
            ) : (
              <>
                <Image src="/icon/play.svg" width={22} height={24} alt="플레이 버튼" /> 시작
              </>
            )}
          </button>
        </div>
      </div>
      <div className={styles.recordContainer}>
        <h3 className={styles.recordTitle}>
          시간기록
        </h3>
        <ul className={styles.recordList}>
          {records.map((record, index) => (
            <li className={styles.recordItem} key={index}>
              <div className={styles.recordInfo}>
                <div className={styles.recordName}>랩{index + 1}</div>
                <div className={styles.recordTime}>{formatTime(record.time)}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.buttonGroup}>
        <button className={styles.addButton} onClick={handleApplyRecord} disabled={!time || isRunning}>
          독서기록에 적용하기
        </button>
      </div>
    </div>
  );
}
