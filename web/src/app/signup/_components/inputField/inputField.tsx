"use client"

import React from 'react';
import styles from './inputField.module.css';
import { SignupFormData } from '../../_props/props';

interface InputFieldProps {
  id: keyof SignupFormData;
  type: string;
  placeholder: string;
  maxLength?: number;
  signupFormData: SignupFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  label: string;
  button?: JSX.Element;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  type,
  placeholder,
  maxLength,
  signupFormData,
  handleChange,
  handleBlur,
  handleFocus,
  handleKeyDown,
  label
}) => {
  const field = signupFormData[id];

  return (
    <div className={`${styles.inputGroup} ${field.value && !field.isValid && !field.isFocused ? styles.error : ''} ${field.value && field.isValid ? styles.valid : ''}`}>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={styles.input}
        value={field.value}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        maxLength={maxLength}
        />
      <label htmlFor={id} className={styles.label}>{label}</label>
      {field.value && !field.isValid && !field.isFocused && <span className={styles.errorMessage}>{field.serverErrorMessage || field.regexErrorMessage}</span>}
      {field.value && field.isValid && !field.isFocused && <span className={styles.validMessage}>{field.validMessage}</span>}
    </div>
  );
};

export default InputField;
