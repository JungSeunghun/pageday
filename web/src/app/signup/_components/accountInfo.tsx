"use client"

import React from 'react';
import styles from '../page.module.css';
import { AccountInfoProps } from '../_props/props';

const AccountInfo: React.FC<AccountInfoProps> = ({ signupFormData, errors, handleChange, handleBlur, handleNext, handlePrev }) => {
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formHeader}>계정 정보 입력</h2>
      
      <form className={styles.form} onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
        <div className={`${styles.inputGroup} ${errors.username ? styles.error : ''}`}>
          <input
            id="username"
            type="text"
            placeholder="아이디"
            className={styles.input}
            value={signupFormData.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="username" className={styles.label}>아이디</label>
          {errors.username && <span className={styles.errorMessage}>{errors.username}</span>}
        </div>

        <div className={`${styles.inputGroup} ${errors.email ? styles.error : ''}`}>
          <input
            id="email"
            type="email"
            placeholder="이메일"
            className={styles.input}
            value={signupFormData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="email" className={styles.label}>이메일</label>
          {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
        </div>

        <div className={`${styles.inputGroup} ${errors.password ? styles.error : ''}`}>
          <input
            id="password"
            type="password"
            placeholder="비밀번호"
            className={styles.input}
            value={signupFormData.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="password" className={styles.label}>비밀번호</label>
          {errors.password && <span className={styles.errorMessage}>{errors.password}</span>}
        </div>

        <div className={`${styles.inputGroup} ${errors.confirmPassword ? styles.error : ''}`}>
          <input
            id="confirmPassword"
            type="password"
            placeholder="비밀번호 확인"
            className={styles.input}
            value={signupFormData.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="confirmPassword" className={styles.label}>비밀번호 확인</label>
          {errors.confirmPassword && <span className={styles.errorMessage}>{errors.confirmPassword}</span>}
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
