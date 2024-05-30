"use client"

import React from 'react';
import styles from '../page.module.css';
import { PersonalInfoProps } from '../_props/props';

const PersonalInfo: React.FC<PersonalInfoProps> = ({ signupFormData, errors, handleChange, handleBlur, handleSubmit, handleKeyDown, handlePrev }) => {
  return (
    <div className={styles.formContainer}>
      <h2>개인 정보 입력</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={`${styles.inputGroup} ${errors.nickname ? styles.error : ''}`}>
          <input
            id="nickname"
            type="text"
            placeholder="별명"
            className={styles.input}
            value={signupFormData.nickname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="nickname" className={styles.label}>별명</label>
          {errors.nickname && <span className={styles.errorMessage}>{errors.nickname}</span>}
        </div>

        <div className={`${styles.inputGroup} ${errors.name ? styles.error : ''}`}>
          <input
            id="name"
            type="text"
            placeholder="이름"
            className={styles.input}
            value={signupFormData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="name" className={styles.label}>이름</label>
          {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
        </div>

        <div className={styles.row}>
          <div className={`${styles.inputGroup} ${errors.year ? styles.error : ''}`}>
            <input
              id="year"
              type="text"
              placeholder="년도"
              className={styles.input}
              value={signupFormData.year}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              maxLength={4}
            />
            <label htmlFor="year" className={styles.label}>년도</label>
            {errors.year && <span className={styles.errorMessage}>{errors.year}</span>}
          </div>

          <div className={`${styles.inputGroup} ${errors.month ? styles.error : ''}`}>
            <input
              id="month"
              type="text"
              placeholder="월"
              className={styles.input}
              value={signupFormData.month}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              maxLength={2}
            />
            <label htmlFor="month" className={styles.label}>월</label>
            {errors.month && <span className={styles.errorMessage}>{errors.month}</span>}
          </div>

          <div className={`${styles.inputGroup} ${errors.day ? styles.error : ''}`}>
            <input
              id="day"
              type="text"
              placeholder="일"
              className={styles.input}
              value={signupFormData.day}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              maxLength={2}
            />
            <label htmlFor="day" className={styles.label}>일</label>
            {errors.day && <span className={styles.errorMessage}>{errors.day}</span>}
          </div>
        </div>

        <div className={styles.row}>
          <div className={`${styles.inputGroup} ${errors.phone1 ? styles.error : ''}`}>
            <input
              id="phone1"
              type="text"
              placeholder="000"
              className={styles.input}
              value={signupFormData.phone1}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              maxLength={3}
            />
            <label htmlFor="phone1" className={styles.label}>전화번호</label>
            {errors.phone1 && <span className={styles.errorMessage}>{errors.phone1}</span>}
          </div>

          <div className={`${styles.inputGroup} ${errors.phone2 ? styles.error : ''}`}>
            <input
              id="phone2"
              type="text"
              placeholder="0000"
              className={styles.input}
              value={signupFormData.phone2}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              maxLength={4}
            />
            <label htmlFor="phone2" className={styles.label}></label>
            {errors.phone2 && <span className={styles.errorMessage}>{errors.phone2}</span>}
          </div>

          <div className={`${styles.inputGroup} ${errors.phone3 ? styles.error : ''}`}>
            <input
              id="phone3"
              type="text"
              placeholder="0000"
              className={styles.input}
              value={signupFormData.phone3}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              maxLength={4}
            />
            <label htmlFor="phone3" className={styles.label}></label>
            {errors.phone3 && <span className={styles.errorMessage}>{errors.phone3}</span>}
          </div>
        </div>

        <div className={styles.buttonGroup}>
          <button type="button" className={styles.button} onClick={handlePrev}>이전</button>
          <button type="submit" className={styles.button}>회원가입</button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
