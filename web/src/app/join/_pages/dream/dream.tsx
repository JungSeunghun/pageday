"use client"

import React, { useState, useEffect } from 'react';
import styles from "./dream.module.css";

interface DreamProps {
  dream: string;
  setDream: React.Dispatch<React.SetStateAction<string>>;
  handleNext: () => void;
  handlePrev: () => void;
}

export default function Dream({ dream, setDream, handleNext, handlePrev }: DreamProps) {
  const [isDreamValid, setIsDreamValid] = useState(false);

  const validateDream = (dream: string) => {
    const regex = /^.{2,}$/;
    return regex.test(dream.trim());
  };

  useEffect(() => {
    setIsDreamValid(validateDream(dream));
  }, [dream]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDream(e.target.value);
  };

  const handleSkip = () => {
    handleNext();
  };

  return (
    <div className={styles.container}>
      <div className={styles.message}>
        이루고 싶은 꿈을<br/> 
        적어보세요!
      </div>
      <div className={styles.description}>
        꿈은 구체적일수록 좋아요.
      </div>
      <div className={styles.subDescription}>
        (언제까지 + 어떤 목표 이루기)
      </div>
      <div className={styles.textareaContainer}>
        <textarea 
          className={styles.textarea} 
          placeholder="10년 후에 100억 건물주 되기!"
          value={dream}
          onChange={handleChange}
        />
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handlePrev}>
          이전
        </button>
        <button className={styles.button} onClick={handleNext} disabled={!isDreamValid}>
          다음
        </button>
      </div>
      <div className={styles.skipButtonContainer}>
        <button className={styles.skipButton} onClick={handleSkip}>
          나중에 입력할게요
        </button>
      </div>
    </div>
  );
}