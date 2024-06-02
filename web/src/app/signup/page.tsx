"use client"

import React, { useState } from 'react';
import styles from './page.module.css';
import AccountInfo from './_pages/accountInfo';
import PersonalInfo from './_pages/personalInfo';
import Agreements from './_pages/agreements';
import { useRouter } from 'next/navigation';
import { SignupFormData, initialSignupFormData } from './_props/props';
import useSignupForm from './_hooks/useSignupForm';

const Signup: React.FC = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [agreements, setAgreements] = useState({
    privacy: false,
    terms: false,
    all: false,
  });
  const { formData, handleChange, handleBlur, handleFocus, validate, updateField } = useSignupForm(initialSignupFormData);

  const handleNext = async () => {
    if (step === 1) {
      if (agreements.privacy && agreements.terms) {
        setStep(2);
      }
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const values = (Object.keys(formData) as (keyof SignupFormData)[]).reduce((acc, key) => {
      acc[key] = formData[key].value;
      return acc;
    }, {} as { [key in keyof SignupFormData]: string });

    if (validate()) {
      const response = await fetch(`/api/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        router.push("/signin");
      } else {
        const errorData = await response.json();
        console.log(errorData);
      }
    }
  };

  const handleAgreementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    if (id === 'all') {
      setAgreements({
        privacy: checked,
        terms: checked,
        all: checked,
      });
    } else {
      const newAgreements = { ...agreements, [id]: checked };
      newAgreements.all = newAgreements.privacy && newAgreements.terms;
      setAgreements(newAgreements);
    }
  };

  return (
    <div className={styles.signupContainer}>
      {step === 1 && (
        <Agreements
          agreements={agreements}
          handleChange={handleAgreementChange}
          handleNext={handleNext}
        />
      )}
      {step === 2 && (
        <AccountInfo
          signupFormData={formData}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleNext={handleNext}
          handlePrev={handlePrev}
          handleFocus={handleFocus}
          updateField={updateField} // Add this line
        />
      )}
      {step === 3 && (
        <PersonalInfo
          signupFormData={formData}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleSubmit={handleSubmit}
          handlePrev={handlePrev}
          handleFocus={handleFocus}
        />
      )}
    </div>
  );
};

export default Signup;