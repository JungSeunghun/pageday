"use client"

import React, { useState, useEffect } from 'react';
import styles from './timer.module.css';

const Timer: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setIntervalId(interval);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
    setTime(0);
    if (intervalId) {
      clearInterval(intervalId);
    }
  };

  const handlePause = () => {
    setIsRunning(false);
    if (intervalId) {
      clearInterval(intervalId);
    }
  };

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={styles.timer}>
      <div className={styles.timerContainer}>
        <div className={styles.timerDisplay}>{formatTime(time)}</div>
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={handleStart}>
            Start
          </button>
          <button className={styles.button} onClick={handleStop}>
            Stop
          </button>
          <button className={styles.button} onClick={handlePause}>
            Pause
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;