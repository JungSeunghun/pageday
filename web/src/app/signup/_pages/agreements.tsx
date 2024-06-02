"use client"

import React from 'react';
import styles from '../page.module.css';
import { AgreementsProps } from '../_props/props';
import { servicePolicy } from '../_policy/servicePolicy';
import { privacyPolicy } from '../_policy/privacyPolicy';

const Agreements: React.FC<AgreementsProps> = ({ agreements, handleChange, handleNext }) => {
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formHeader}>개인정보 동의 및 서비스 이용 약관</h2>
      
      <div className={styles.scrollableContainer}>
        <h3 className={styles.containerHeader}>개인정보 동의서</h3>
        <div className={styles.scrollableContent}>
          {privacyPolicy.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <label className={styles.checkLabel}>
          <input
            type="checkbox"
            id="privacy"
            checked={agreements.privacy}
            onChange={handleChange}
            className={styles.checkbox}
          />
          개인정보 동의
          <span className={styles.customCheckbox}></span>
        </label>
      </div>
      
      <div className={styles.scrollableContainer}>
        <h3 className={styles.containerHeader}>서비스 이용 약관</h3>
        <div className={styles.scrollableContent}>
          {servicePolicy.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <label className={styles.checkLabel}>
          <input
            type="checkbox"
            id="terms"
            checked={agreements.terms}
            onChange={handleChange}
            className={styles.checkbox}
          />
          서비스 이용 약관
          <span className={styles.customCheckbox}></span>
        </label>
      </div>

      <div className={styles.checkAllContainer}>
        <label className={styles.checkLabel}>
          <input
            type="checkbox"
            id="all"
            checked={agreements.all}
            onChange={handleChange}
            className={styles.checkbox}
          />
          전체 동의
          <span className={styles.customCheckbox}></span>
        </label>
      </div>
      
      <div className={styles.buttonGroup}>
        <button
          type="button"
          className={styles.button}
          onClick={handleNext}
          disabled={!agreements.privacy || !agreements.terms}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default Agreements;
