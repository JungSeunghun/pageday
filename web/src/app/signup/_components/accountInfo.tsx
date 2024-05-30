"use client"

import React from 'react';
import styles from '../page.module.css';
import { AccountInfoProps } from '../_props/props';

const AccountInfo: React.FC<AccountInfoProps> = ({ signupFormData, handleChange, handleBlur, handleNext, handlePrev }) => {
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formHeader}>계정 정보 입력</h2>
      
      <form className={styles.form} onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
        <div className={`${styles.inputGroup} ${signupFormData.username.value && !signupFormData.username.isValid ? styles.error : ''}`}>
          <input
            id="username"
            type="text"
            placeholder="아이디"
            className={styles.input}
            value={signupFormData.username.value}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="username" className={styles.label}>아이디</label>
          {signupFormData.username.value && !signupFormData.username.isValid && <span className={styles.errorMessage}>{signupFormData.username.errorMessage}</span>}
        </div>

        <div className={`${styles.inputGroup} ${signupFormData.email.value && !signupFormData.email.isValid ? styles.error : ''}`}>
          <input
            id="email"
            type="email"
            placeholder="이메일"
            className={styles.input}
            value={signupFormData.email.value}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="email" className={styles.label}>이메일</label>
          {signupFormData.email.value && !signupFormData.email.isValid && <span className={styles.errorMessage}>{signupFormData.email.errorMessage}</span>}
        </div>

        <div className={`${styles.inputGroup} ${signupFormData.password.value && !signupFormData.password.isValid ? styles.error : ''}`}>
          <input
            id="password"
            type="password"
            placeholder="비밀번호"
            className={styles.input}
            value={signupFormData.password.value}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="password" className={styles.label}>비밀번호</label>
          {signupFormData.password.value && !signupFormData.password.isValid && <span className={styles.errorMessage}>{signupFormData.password.errorMessage}</span>}
        </div>

        <div className={`${styles.inputGroup} ${signupFormData.confirmPassword.value && !signupFormData.confirmPassword.isValid ? styles.error : ''}`}>
          <input
            id="confirmPassword"
            type="password"
            placeholder="비밀번호 확인"
            className={styles.input}
            value={signupFormData.confirmPassword.value}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="confirmPassword" className={styles.label}>비밀번호 확인</label>
          {signupFormData.confirmPassword.value && !signupFormData.confirmPassword.isValid && <span className={styles.errorMessage}>{signupFormData.confirmPassword.errorMessage}</span>}
        </div>

        <div className={styles.buttonGroup}>
          <button type="button" className={styles.button} onClick={handlePrev}>이전</button>
          <button type="button" className={styles.button} onClick={handleNext}>다음</button>
        </div>
      </form>
    </div>
  );
};

export default AccountInfo;
