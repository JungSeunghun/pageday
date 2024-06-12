"use client"

import React, { useState, useEffect, useCallback } from 'react';
import styles from "./goal.module.css";

interface GoalProps {
  nickname: string;
  todayAction: string;
  setTodayAction: React.Dispatch<React.SetStateAction<string>>;
  todayBook: string;
  setTodayBook: React.Dispatch<React.SetStateAction<string>>;
  handlePrev: () => void;
  handleNext: () => void;
}

export default function Goal({ nickname, todayAction, setTodayAction, todayBook, setTodayBook, handlePrev, handleNext }: GoalProps) {
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = useCallback(() => {
    const isActionValid = /^[a-zA-Z가-힣\s]{1,}$/.test(todayAction);
    const isBookValid = /^[a-zA-Z가-힣\s]{1,}$/.test(todayBook);
    return isActionValid && isBookValid;
  }, [todayAction, todayBook]);

  useEffect(() => {
    setIsFormValid(validateForm());
  }, [todayAction, todayBook, validateForm]);

  const handleActionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\s{2,}/g, ' ');
    setTodayAction(value);
  };

  const handleBookChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\s{2,}/g, ' ');
    setTodayBook(value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.message}>
        {nickname}님의 멋진 꿈을 이루기 위해<br/> 
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
          <input 
            type="text" 
            className={styles.inputAction} 
            placeholder="퇴근 후 샤워"
            value={todayAction}
            onChange={handleActionChange}
          />
          <span className={styles.goalText}>을(를) 한 다음</span>
        </div>
        <div className={styles.goalInputContainer}>
          <input 
            type="text" 
            className={styles.inputBook} 
            placeholder="위대한 개츠비"
            value={todayBook}
            onChange={handleBookChange}
          />
          <span className={styles.goalText}>을(를) 읽을 것이다.</span>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handlePrev}>이전</button>
        <button className={styles.button} onClick={handleNext} disabled={!isFormValid}>완료</button>
      </div>
    </div>
  );
}
