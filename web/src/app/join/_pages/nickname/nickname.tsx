import React, { useState, useEffect } from 'react';
import styles from "./nickname.module.css";

interface NicknameProps {
  nickname: string;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
  handleNext: () => void;
}

export default function Nickname (
  {nickname, setNickname, handleNext} : NicknameProps
) {
  const [isNicknameValid, setIsNicknameValid] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const regex = /^[a-zA-Zㄱ-ㅎ가-힣0-9]{0,8}$/;
    if (regex.test(value)) {
      setNickname(value);
    }
  }

  useEffect(() => {
    const regex = /^[a-zA-Z가-힣0-9]{2,8}$/;
    setIsNicknameValid(regex.test(nickname));
  }, [nickname]);

  return (
    <div className={styles.container}>
      <div className={styles.message}>
        페이지데이에<br/> 
        가입하신 것을 환영합니다.
      </div>
      <div className={styles.description}>
        닉네임을 입력해주세요.
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.input}
          value={nickname}
          onChange={handleChange}
          maxLength={8}
        />
        <div className={styles.inputDescription}>
          닉네임을 최소 2자에서 최대 8자, 한/영/숫자
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button 
          className={styles.button} 
          onClick={handleNext} 
          disabled={!isNicknameValid}
        >
          다음
        </button>
      </div>
    </div>
  );
}
