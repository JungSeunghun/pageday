"use client"

import React, { useState } from 'react';
import styles from '../page.module.css';
import { PersonalInfoProps } from '../_props/props';
import InputField from '../_components/inputField/inputField';

const PersonalInfo: React.FC<PersonalInfoProps> = ({ signupFormData, handleChange, handleBlur, handleSubmit, handlePrev, handleFocus }) => {
  const isFormValid = () => {
    return (
      signupFormData.username.isValid &&
      signupFormData.nickname.isValid &&
      signupFormData.password.isValid &&
      signupFormData.confirmPassword.isValid &&
      signupFormData.name.isValid &&
      signupFormData.nickname.isValid &&
      signupFormData.year.isValid &&
      signupFormData.month.isValid &&
      signupFormData.day.isValid &&
      signupFormData.phone1.isValid &&
      signupFormData.phone2.isValid &&
      signupFormData.phone3.isValid &&
      signupFormData.email.isValid
    );
  };

  const handleNumericKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const isNumeric = /^[0-9\b]+$/;
    if (!isNumeric.test(e.key) && e.key !== 'Backspace') {
      e.preventDefault();
    }
  };

  const handleAutoTab = (e: React.ChangeEvent<HTMLInputElement>, nextFieldId: string | null) => {
    const { id, value, maxLength } = e.target;
    handleChange(e);

    if (maxLength && value.length >= maxLength && nextFieldId) {
      const nextField = document.getElementById(nextFieldId) as HTMLInputElement;
      if (nextField) {
        nextField.focus();
      }
    }
  };
    
  return (
    <div className={styles.formContainer}>
      <h2>개인 정보 입력</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputField
          id="name"
          type="text"
          placeholder="이름을 입력하세요."
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
            handleChange={(e) => handleAutoTab(e, "month")}
            handleBlur={handleBlur}
            handleFocus={handleFocus}
            handleKeyDown={handleNumericKeyDown}
            label="생년월일"
          />

          <InputField
            id="month"
            type="text"
            placeholder="월"
            maxLength={2}
            signupFormData={signupFormData}
            handleChange={(e) => handleAutoTab(e, "day")}
            handleBlur={handleBlur}
            handleFocus={handleFocus}
            handleKeyDown={handleNumericKeyDown}
            label="월"
          />

          <InputField
            id="day"
            type="text"
            placeholder="일"
            maxLength={2}
            signupFormData={signupFormData}
            handleChange={(e) => handleAutoTab(e, "phone1")}
            handleBlur={handleBlur}
            handleFocus={handleFocus}
            handleKeyDown={handleNumericKeyDown}
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
            handleChange={(e) => handleAutoTab(e, "phone2")}
            handleBlur={handleBlur}
            handleFocus={handleFocus}
            handleKeyDown={handleNumericKeyDown}
            label="전화번호"
          />

          <InputField
            id="phone2"
            type="text"
            placeholder="0000"
            maxLength={4}
            signupFormData={signupFormData}
            handleChange={(e) => handleAutoTab(e, "phone3")}
            handleBlur={handleBlur}
            handleFocus={handleFocus}
            handleKeyDown={handleNumericKeyDown}
            label=""
          />

          <InputField
            id="phone3"
            type="text"
            placeholder="0000"
            maxLength={4}
            signupFormData={signupFormData}
            handleChange={(e) => handleAutoTab(e, "email")}
            handleBlur={handleBlur}
            handleFocus={handleFocus}
            handleKeyDown={handleNumericKeyDown}
            label=""
          />
        </div>
        
        <InputField
          id="email"
          type="email"
          placeholder="이메일을 입력하세요."
          signupFormData={signupFormData}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleFocus={handleFocus}
          label="이메일"
        />

        <div className={styles.buttonGroup}>
          <button type="button" className={styles.button} onClick={handlePrev}>이전</button>
          <button type="submit" className={styles.button} disabled={!isFormValid()}>회원가입</button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;