"use client"

import React from 'react';
import styles from '../page.module.css';
import { PersonalInfoProps } from '../_props/props';

const PersonalInfo: React.FC<PersonalInfoProps> = ({ signupFormData, handleChange, handleBlur, handleSubmit, handleKeyDown, handlePrev }) => {
  return (
    <div className={styles.formContainer}>
      <h2>개인 정보 입력</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={`${styles.inputGroup} ${signupFormData.nickname.value && !signupFormData.nickname.isValid ? styles.error : ''}`}>
          <input
            id="nickname"
            type="text"
            placeholder="별명"
            className={styles.input}
            value={signupFormData.nickname.value}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="nickname" className={styles.label}>별명</label>
          {signupFormData.nickname.value && !signupFormData.nickname.isValid && <span className={styles.errorMessage}>{signupFormData.nickname.errorMessage}</span>}
        </div>

        <div className={`${styles.inputGroup} ${signupFormData.name.value && !signupFormData.name.isValid ? styles.error : ''}`}>
          <input
            id="name"
            type="text"
            placeholder="이름"
            className={styles.input}
            value={signupFormData.name.value}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="name" className={styles.label}>이름</label>
          {signupFormData.name.value && !signupFormData.name.isValid && <span className={styles.errorMessage}>{signupFormData.name.errorMessage}</span>}
        </div>

        <div className={styles.row}>
          <div className={`${styles.inputGroup} ${signupFormData.year.value && !signupFormData.year.isValid ? styles.error : ''}`}>
            <input
              id="year"
              type="text"
              placeholder="년도"
              className={styles.input}
              value={signupFormData.year.value}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              maxLength={4}
            />
            <label htmlFor="year" className={styles.label}>년도</label>
            {signupFormData.year.value && !signupFormData.year.isValid && <span className={styles.errorMessage}>{signupFormData.year.errorMessage}</span>}
          </div>

          <div className={`${styles.inputGroup} ${signupFormData.month.value && !signupFormData.month.isValid ? styles.error : ''}`}>
            <input
              id="month"
              type="text"
              placeholder="월"
              className={styles.input}
              value={signupFormData.month.value}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              maxLength={2}
            />
            <label htmlFor="month" className={styles.label}>월</label>
            {signupFormData.month.value && !signupFormData.month.isValid && <span className={styles.errorMessage}>{signupFormData.month.errorMessage}</span>}
          </div>

          <div className={`${styles.inputGroup} ${signupFormData.day.value && !signupFormData.day.isValid ? styles.error : ''}`}>
            <input
              id="day"
              type="text"
              placeholder="일"
              className={styles.input}
              value={signupFormData.day.value}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              maxLength={2}
            />
            <label htmlFor="day" className={styles.label}>일</label>
            {signupFormData.day.value && !signupFormData.day.isValid && <span className={styles.errorMessage}>{signupFormData.day.errorMessage}</span>}
          </div>
        </div>

        <div className={styles.row}>
          <div className={`${styles.inputGroup} ${signupFormData.phone1.value && !signupFormData.phone1.isValid ? styles.error : ''}`}>
            <input
              id="phone1"
              type="text"
              placeholder="000"
              className={styles.input}
              value={signupFormData.phone1.value}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              maxLength={3}
            />
            <label htmlFor="phone1" className={styles.label}>전화번호</label>
            {signupFormData.phone1.value && !signupFormData.phone1.isValid && <span className={styles.errorMessage}>{signupFormData.phone1.errorMessage}</span>}
          </div>

          <div className={`${styles.inputGroup} ${signupFormData.phone2.value && !signupFormData.phone2.isValid ? styles.error : ''}`}>
            <input
              id="phone2"
              type="text"
              placeholder="0000"
              className={styles.input}
              value={signupFormData.phone2.value}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              maxLength={4}
            />
            <label htmlFor="phone2" className={styles.label}></label>
            {signupFormData.phone2.value && !signupFormData.phone2.isValid && <span className={styles.errorMessage}>{signupFormData.phone2.errorMessage}</span>}
          </div>

          <div className={`${styles.inputGroup} ${signupFormData.phone3.value && !signupFormData.phone3.isValid ? styles.error : ''}`}>
            <input
              id="phone3"
              type="text"
              placeholder="0000"
              className={styles.input}
              value={signupFormData.phone3.value}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              maxLength={4}
            />
            <label htmlFor="phone3" className={styles.label}></label>
            {signupFormData.phone3.value && !signupFormData.phone3.isValid && <span className={styles.errorMessage}>{signupFormData.phone3.errorMessage}</span>}
          </div>
        </div>

        <div className={styles.buttonGroup}>
          <button type="button" className={styles.button} onClick={handlePrev}>이전</button>
          <button type="button" className={styles.button}>회원가입</button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
