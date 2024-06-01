"use client"

import React from 'react';
import styles from '../page.module.css';
import { PersonalInfoProps } from '../_props/props';
import InputField from './inputField';

const PersonalInfo: React.FC<PersonalInfoProps> = ({ signupFormData, handleChange, handleBlur, handleSubmit, handleKeyDown, handlePrev, handleFocus }) => {
  return (
    <div className={styles.formContainer}>
      <h2>개인 정보 입력</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputField
          id="nickname"
          type="text"
          placeholder="별명"
          signupFormData={signupFormData}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleFocus={handleFocus}
          label="별명"
        />

        <InputField
          id="name"
          type="text"
          placeholder="이름"
          signupFormData={signupFormData}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleFocus={handleFocus}
          label="이름"
        />

        <div className={styles.row}>
          <InputField
            id="year"
            type="text"
            placeholder="년도"
            maxLength={4}
            signupFormData={signupFormData}
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleFocus={handleFocus}
            handleKeyDown={handleKeyDown}
            label="년도"
          />

          <InputField
            id="month"
            type="text"
            placeholder="월"
            maxLength={2}
            signupFormData={signupFormData}
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleFocus={handleFocus}
            handleKeyDown={handleKeyDown}
            label="월"
          />

          <InputField
            id="day"
            type="text"
            placeholder="일"
            maxLength={2}
            signupFormData={signupFormData}
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleFocus={handleFocus}
            handleKeyDown={handleKeyDown}
            label="일"
          />
        </div>

        <div className={styles.row}>
          <InputField
            id="phone1"
            type="text"
            placeholder="000"
            maxLength={3}
            signupFormData={signupFormData}
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleFocus={handleFocus}
            handleKeyDown={handleKeyDown}
            label="전화번호"
          />

          <InputField
            id="phone2"
            type="text"
            placeholder="0000"
            maxLength={4}
            signupFormData={signupFormData}
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleFocus={handleFocus}
            handleKeyDown={handleKeyDown}
            label=""
          />

          <InputField
            id="phone3"
            type="text"
            placeholder="0000"
            maxLength={4}
            signupFormData={signupFormData}
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleFocus={handleFocus}
            handleKeyDown={handleKeyDown}
            label=""
          />
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