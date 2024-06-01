"use client"

import React, { useState } from 'react';
import styles from '../page.module.css';
import { AccountInfoProps } from '../_props/props';
import InputField from './inputField';

const AccountInfo: React.FC<AccountInfoProps> = ({ signupFormData, handleChange, handleBlur, handleNext, handlePrev, handleFocus, updateField }) => {
  const [emailCodeSent, setEmailCodeSent] = useState(false);
  const [emailCodeVerified, setEmailCodeVerified] = useState(false);

  const handleSendEmailCode = async () => {
    const response = await fetch(`/api/signup/send-email-code`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: signupFormData.email.value }),
    });

    if (response.ok) {
      setEmailCodeSent(true);
    } else {
      const errorData = await response.json();
      updateField('email', { serverErrorMessage: errorData.message });
    }
  };

  const handleVerifyEmailCode = async () => {
    const response = await fetch(`/api/signup/verify-email-code`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: signupFormData.email.value, emailCode: signupFormData.emailCode.value }),
    });

    if (response.ok) {
      setEmailCodeVerified(true);
    } else {
      const errorData = await response.json();
      updateField('emailCode', { serverErrorMessage: errorData.message });
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formHeader}>계정 정보 입력</h2>
      
      <form className={styles.form} onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
        <InputField
          id="username"
          type="text"
          placeholder="아이디"
          signupFormData={signupFormData}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleFocus={handleFocus}
          label="아이디"
        />

        <InputField
          id="email"
          type="email"
          placeholder="이메일"
          signupFormData={signupFormData}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleFocus={handleFocus}
          label="이메일"
          button={
            <button type="button" className={styles.button} onClick={handleSendEmailCode} disabled={emailCodeSent}>
              보안코드 발송
            </button>
          }
        />
        
        {emailCodeSent && (
          <InputField
            id="emailCode"
            type="text"
            placeholder="보안코드"
            signupFormData={signupFormData}
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleFocus={handleFocus}
            label="보안코드"
            maxLength={6}
            button={
              <button type="button" className={styles.button} onClick={handleVerifyEmailCode} disabled={emailCodeVerified}>
                보안코드 확인
              </button>
            }
          />
        )}

        <InputField
          id="password"
          type="password"
          placeholder="비밀번호"
          signupFormData={signupFormData}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleFocus={handleFocus}
          label="비밀번호"
        />

        <InputField
          id="confirmPassword"
          type="password"
          placeholder="비밀번호 확인"
          signupFormData={signupFormData}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleFocus={handleFocus}
          label="비밀번호 확인"
        />

        <div className={styles.buttonGroup}>
          <button type="button" className={styles.button} onClick={handlePrev}>이전</button>
          <button type="button" className={styles.button} onClick={handleNext} disabled={!emailCodeVerified}>다음</button>
        </div>
      </form>
    </div>
  );
};

export default AccountInfo;
