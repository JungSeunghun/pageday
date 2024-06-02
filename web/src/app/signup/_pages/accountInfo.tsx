"use client"

import styles from '../page.module.css';
import { AccountInfoProps } from '../_props/props';
import InputField from '../_components/inputField/inputField';

const AccountInfo: React.FC<AccountInfoProps> = ({ signupFormData, handleChange, handleBlur, handleNext, handlePrev, handleFocus }) => {
  const isFormValid = () => {
    return (
      signupFormData.username.isValid &&
      signupFormData.nickname.isValid &&
      signupFormData.password.isValid &&
      signupFormData.confirmPassword.isValid
    );
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formHeader}>계정 정보 입력</h2>
      
      <form className={styles.form} onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
        <InputField
          id="username"
          type="text"
          placeholder="아이디를 입력하세요."
          signupFormData={signupFormData}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleFocus={handleFocus}
          label="아이디"
        />

        <InputField
          id="nickname"
          type="text"
          placeholder="별명을 입력하세요."
          signupFormData={signupFormData}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleFocus={handleFocus}
          label="별명"
        />

        <InputField
          id="password"
          type="password"
          placeholder="비밀번호를 입력하세요."
          signupFormData={signupFormData}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleFocus={handleFocus}
          label="비밀번호"
        />

        <InputField
          id="confirmPassword"
          type="password"
          placeholder="비밀번호를 다시 입력하세요."
          signupFormData={signupFormData}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleFocus={handleFocus}
          label="비밀번호 확인"
        />

        <div className={styles.buttonGroup}>
          <button type="button" className={styles.button} onClick={handlePrev}>이전</button>
          <button type="button" className={styles.button} onClick={handleNext} disabled={!isFormValid()}>다음</button>
        </div>
      </form>
    </div>
  );
};

export default AccountInfo;
