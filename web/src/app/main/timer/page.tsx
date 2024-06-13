"use client"

import { useState, useRef, ChangeEvent, MouseEvent, WheelEvent, TouchEvent } from 'react';
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
  const [todayBook, setTodayBook] = useState<string>('불편한 편의점');
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [records, setRecords] = useState<Record[]>([]);
  const [isFocusModeOn, setIsFocusModeOn] = useState<boolean>(false);
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

  const handleFocusModeToggle = () => {
    setIsFocusModeOn(!isFocusModeOn);
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const velocity = useRef<number>(0);
  const lastY = useRef<number | null>(null);
  const animationFrameId = useRef<number | null>(null);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (container) {
      container.dataset.isDragging = 'true';
      container.dataset.startY = String(e.pageY - container.offsetTop);
      container.dataset.scrollTop = String(container.scrollTop);
      velocity.current = 0;
      lastY.current = e.pageY;
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (container && container.dataset.isDragging === 'true') {
      e.preventDefault();
      const startY = Number(container.dataset.startY);
      const scrollTop = Number(container.dataset.scrollTop);
      const y = e.pageY - container.offsetTop;
      const walk = (startY - y);
      container.scrollTop = scrollTop + walk;
      if (lastY.current !== null) {
        velocity.current = lastY.current - y;
      }
      lastY.current = e.pageY;
    }
  };

  const handleMouseUp = () => {
    const container = containerRef.current;
    if (container) {
      container.dataset.isDragging = 'false';
      if (velocity.current !== 0) {
        startDeceleration();
      }
    }
  };

  const handleMouseLeave = () => {
    const container = containerRef.current;
    if (container && container.dataset.isDragging === 'true') {
      container.dataset.isDragging = 'false';
      if (velocity.current !== 0) {
        startDeceleration();
      }
    }
  };

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (container) {
      velocity.current += e.deltaY * 0.2;
      if (animationFrameId.current === null) {
        startDeceleration();
      }
    }
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (container) {
      const touch = e.touches[0];
      container.dataset.isDragging = 'true';
      container.dataset.startY = String(touch.pageY - container.offsetTop);
      container.dataset.scrollTop = String(container.scrollTop);
      velocity.current = 0;
      lastY.current = touch.pageY;
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
    }
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (container && container.dataset.isDragging === 'true') {
      e.preventDefault();
      const touch = e.touches[0];
      const startY = Number(container.dataset.startY);
      const scrollTop = Number(container.dataset.scrollTop);
      const y = touch.pageY - container.offsetTop;
      const walk = (startY - y);
      container.scrollTop = scrollTop + walk;
      if (lastY.current !== null) {
        velocity.current = lastY.current - y;
      }
      lastY.current = touch.pageY;
    }
  };

  const handleTouchEnd = () => {
    const container = containerRef.current;
    if (container) {
      container.dataset.isDragging = 'false';
      if (velocity.current !== 0) {
        startDeceleration();
      }
    }
  };

  const startDeceleration = () => {
    const container = containerRef.current;
    if (!container) return;

    const step = () => {
      container.scrollTop += velocity.current;
      velocity.current *= 0.95;

      if (Math.abs(velocity.current) > 0.5) {
        animationFrameId.current = requestAnimationFrame(step);
      } else {
        velocity.current = 0;
        animationFrameId.current = null;
      }
    };

    if (animationFrameId.current !== null) {
      cancelAnimationFrame(animationFrameId.current);
    }
    animationFrameId.current = requestAnimationFrame(step);
  };

  return (
    <div 
      className={styles.container}
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}>
      <Header/>
      <div className={styles.focusContainer}>
        <div className={styles.focusTitleContainer}>
          <h3 className={styles.focusTitle}>
            독서 집중 모드
          </h3>
          <div className={styles.focusSubtitle}>
            독서모드일 때 Push 알림, 통화 수신을 차단합니다.
          </div>
        </div>
        <button 
          className={`${styles.onButton} ${isFocusModeOn ? styles.on : ''}`} 
          onClick={handleFocusModeToggle}
        >
          {isFocusModeOn ? 'ON' : 'OFF'}
        </button>
      </div>
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