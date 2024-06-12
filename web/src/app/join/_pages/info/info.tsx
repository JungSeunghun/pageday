"use client"

import React, { useState, useEffect, useCallback, useRef } from 'react';
import styles from "./info.module.css";

interface InfoProps {
  nickname: string;
  gender: string;
  setGender: React.Dispatch<React.SetStateAction<string>>;
  job: string;
  setJob: React.Dispatch<React.SetStateAction<string>>;
  year: string;
  setYear: React.Dispatch<React.SetStateAction<string>>;
  month: string;
  setMonth: React.Dispatch<React.SetStateAction<string>>;
  day: string;
  setDay: React.Dispatch<React.SetStateAction<string>>;
  interest: string;
  setInterest: React.Dispatch<React.SetStateAction<string>>;
  handleNext: () => void;
  handlePrev: () => void;
}

export default function Info({ nickname, gender, setGender, job, setJob, year, setYear, month, setMonth, day, setDay, interest, setInterest, handleNext, handlePrev }: InfoProps) {
  const [isFormValid, setIsFormValid] = useState(false);
  const monthRef = useRef<HTMLInputElement>(null);
  const dayRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  const validateForm = useCallback(() => {
    const isGenderValid = gender === '남성' || gender === '여성';
    const isJobValid = /^[a-zA-Z가-힣\s]+$/.test(job); // 영문자, 한글 및 공백만 허용
    const isYearValid = /^\d{4}$/.test(year) && parseInt(year, 10) > 1900; // 4자리 숫자만 허용
    const isMonthValid = /^\d{1,2}$/.test(month) && parseInt(month, 10) > 0 && parseInt(month, 10) <= 12; // 1-2자리 숫자만 허용하고 1-12 사이의 값이어야 함
    const isDayValid = /^\d{1,2}$/.test(day) && parseInt(day, 10) > 0 && parseInt(day, 10) <= 31; // 1-2자리 숫자만 허용하고 1-31 사이의 값이어야 함
    const isInterestValid = /^[a-zA-Z가-힣\s]+$/.test(interest); // 영문자, 한글 및 공백만 허용
    return isGenderValid && isJobValid && isYearValid && isMonthValid && isDayValid && isInterestValid;
  }, [gender, job, year, month, day, interest]);

  useEffect(() => {
    setIsFormValid(validateForm());
  }, [gender, job, year, month, day, interest, validateForm]);

  const handleGenderClick = (selectedGender: string) => {
    setGender(selectedGender);
  };

  const handleJobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJob(e.target.value);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setYear(value);
      if (value.length === 4) {
        monthRef.current?.focus();
      }
    }
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setMonth(value);
      if (value.length === 2) {
        dayRef.current?.focus();
      }
    }
  };

  const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setDay(value);
    }
  };

  const handleYearKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && year.length === 0) {
      yearRef.current?.focus();
    }
  };

  const handleMonthKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && month.length === 0) {
      yearRef.current?.focus();
    }
  };

  const handleDayKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && day.length === 0) {
      monthRef.current?.focus();
    }
  };

  const handleInterestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInterest(e.target.value);
  };

  const handleSkip = () => {
    handleNext();
  };

  return (
    <div className={styles.container}>
      <div className={styles.message}>
        열정이 넘치는<br/>
        {nickname}님<br/>
        안녕하세요.
      </div>
      <div className={styles.description}>
        간단한 회원정보를 입력해주세요.
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.inputRow}>
          <span className={styles.inputLabel}>성별</span>
          <div className={styles.buttonGroup}>
            <button
              className={`${styles.genderButton} ${gender === '남성' ? styles.selected : ''}`}
              onClick={() => handleGenderClick('남성')}
            >
              남성
            </button>
            <button
              className={`${styles.genderButton} ${gender === '여성' ? styles.selected : ''}`}
              onClick={() => handleGenderClick('여성')}
            >
              여성
            </button>
          </div>
        </div>
        <div className={styles.inputRow}>
          <span className={styles.inputLabel}>직업</span>
          <input
            type="text"
            className={styles.input}
            value={job}
            onChange={handleJobChange}
          />
        </div>
        <div className={styles.inputRow}>
          <span className={styles.inputLabel}>생년월일</span>
          <div className={styles.inputGroup}>
            <input
              type="text"
              className={styles.input}
              value={year}
              maxLength={4}
              placeholder="YYYY"
              onChange={handleYearChange}
              onKeyDown={handleYearKeyDown}
              ref={yearRef}
            />
            <input
              type="text"
              className={styles.input}
              ref={monthRef}
              value={month}
              maxLength={2}
              placeholder="MM"
              onChange={handleMonthChange}
              onKeyDown={handleMonthKeyDown}
            />
            <input
              type="text"
              className={styles.input}
              ref={dayRef}
              value={day}
              maxLength={2}
              placeholder="DD"
              onChange={handleDayChange}
              onKeyDown={handleDayKeyDown}
            />
          </div>
        </div>
        <div className={styles.inputRow}>
          <span className={styles.inputLabel}>관심분야</span>
          <input
            type="text"
            className={styles.input}
            value={interest}
            onChange={handleInterestChange}
          />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handlePrev}>
          이전
        </button>
        <button className={styles.button} onClick={handleNext} disabled={!isFormValid}>
          다음
        </button>
      </div>
      <div className={styles.skipButtonContainer}>
        <button className={styles.skipButton} onClick={handleSkip}>나중에 입력할게요</button>
      </div>
    </div>
  );
}
