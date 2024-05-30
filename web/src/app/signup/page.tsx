"use client"

import React, { useState } from 'react';
import styles from './page.module.css';
import AccountInfo from './_components/accountInfo';
import PersonalInfo from './_components/personalInfo';
import { AccountInfoData, PersonalInfoData, SignupFormData } from './_props/props';
import { regexPatterns } from '../_utils/regex';
import Agreements from './_components/agreements';

const Signup: React.FC = () => {
  const [step, setStep] = useState(1);
  const [signupFormData, setSignupForData] = useState<SignupFormData>({
    name: {value: '', isValid: false, errorMessage: '2자 이상 30자 이하의 한글 또는 영문자', regex: /^[가-힣a-zA-Z\s]{2,30}$/},
    username: {value: '', isValid: false, errorMessage: '4자 이상 16자 이하의 소문자 영문자와 숫자', regex: /^(?=.*[a-z])[a-z0-9]{4,16}$/},
    email: {value: '', isValid: false, errorMessage: '잘못된 이메일 주소입니다.', regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/},
    emailCode: {value: '', isValid: false, errorMessage: '잘못된 보안코드입니다.', regex: /^\d{6}$/},
    password: {value: '', isValid: false, errorMessage: '8자 이상 16자 이하의 대문자, 소문자, 숫자, 특수문자 하나 이상 포함', regex: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/},
    confirmPassword: {value: '', isValid: false, errorMessage: '비밀번호가 일치하지 않습니다.', regex: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/},
    nickname: {value: '', isValid: false, errorMessage: '2자 이상 10자 이하의 한글, 영문자 또는 숫자', regex: /^(?=.*[가-힣a-zA-Z])[가-힣a-zA-Z0-9]{2,10}$/},
    year: {value: '', isValid: false, errorMessage: '예: 1990', regex: /^(19\d{2}|20\d{2})$/},
    month: {value: '', isValid: false, errorMessage: '예: 1, 12', regex: /^(1[0-2]|[1-9])$/},
    day: {value: '', isValid: false, errorMessage: '예: 1, 31', regex: /^(3[01]|[12][0-9]|[1-9])$/},
    phone1: {value: '', isValid: false, errorMessage: '2-3자리 숫자', regex: /^\d{2,3}$/},
    phone2: {value: '', isValid: false, errorMessage: '3-4자리 숫자', regex: /^\d{3,4}$/},
    phone3: {value: '', isValid: false, errorMessage: '4자리 숫자', regex: /^\d{4}$/},
  });
  const [agreements, setAgreements] = useState({
    privacy: false,
    terms: false,
    all: false,
  });

  const isValidField = (id: keyof SignupFormData, value: string) => {
    const field = signupFormData[id];
    let isValid = false;
  
    if (id === 'confirmPassword') {
      isValid = value === signupFormData.password.value;
    } else {
      isValid = field.regex.test(value);
    }
  
    setSignupForData(prevState => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        isValid: isValid
      }
    }));
  
    return isValid;
  };

  const validate = () => {
    let isValid = false;
    (Object.keys(signupFormData) as (keyof SignupFormData)[]).forEach(key => {
      isValid = isValidField(key, signupFormData[key].value)
    });

    return isValid;
  };

  const validateAccountInfo = () => {
    let isValid = false;
    const accountInfoKeys: (keyof AccountInfoData)[] = ['username', 'email', 'password', 'confirmPassword'];
    accountInfoKeys.forEach(key => {
      isValid = isValidField(key, signupFormData[key].value)
    })
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setSignupForData(prevState => ({
      ...prevState,
      [id]: {
        ...prevState[id as keyof SignupFormData],
        value: value
      }
    }));
  };

  const isAvailableUsername = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/api/signup/check-username`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "username": signupFormData.username.value }),
    });

    if (response) {
      if(response.ok) {
        const data = await response.json();
        setSignupForData(prevState => ({
          ...prevState,
          username: {
            ...prevState.username,
            isValid: data.available
          }
        }));
  
        return data.available;
      } else {
        setSignupForData(prevState => ({
          ...prevState,
          username: {
            ...prevState.username,
            isValid: false
          }
        }));
      }
    } else {
      setSignupForData(prevState => ({
        ...prevState,
        username: {
          ...prevState.username,
          isValid: false
        }
      }));
    }

    return false;
  }

  const isAvailableEmail = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/api/signup/check-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "email": signupFormData.email.value }),
    });

    if (response) {
      if(response.ok) {
        const data = await response.json();
        setSignupForData(prevState => ({
          ...prevState,
          email: {
            ...prevState.email,
            isValid: data.available
          }
        }));
  
        return data.available;
      } else {
        setSignupForData(prevState => ({
          ...prevState,
          email: {
            ...prevState.email,
            isValid: false
          }
        }));
      }
    } else {
      setSignupForData(prevState => ({
        ...prevState,
        email: {
          ...prevState.email,
          isValid: false
        }
      }));
    }

    return false;
  }

  const isAvailableNickname = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/api/signup/check-nickname`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "nickname": signupFormData.nickname.value }),
    });

    if (response) {
      if(response.ok) {
        const data = await response.json();
        setSignupForData(prevState => ({
          ...prevState,
          nickname: {
            ...prevState.nickname,
            isValid: data.available
          }
        }));
      } else {
        setSignupForData(prevState => ({
          ...prevState,
          nickname: {
            ...prevState.nickname,
            isValid: false
          }
        }));
      }
    } else {
      setSignupForData(prevState => ({
        ...prevState,
        nickname: {
          ...prevState.nickname,
          isValid: false
        }
      }));
    }

    return false;
  }

  const handleBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const isValid = isValidField(id as keyof SignupFormData, value);

    if(isValid) {
      if(id === "username") {
        isAvailableUsername();
      } else if(id === "email") {
        isAvailableEmail();
      } else if (id === "nickname") {
        isAvailableNickname();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!/[0-9]/.test(e.key) && !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key) && !(e.ctrlKey || e.metaKey)) {
      e.preventDefault();
    }
  };

  const handleNext = async() => {
    if (step === 1) {
      if (agreements.privacy && agreements.terms) {
        setStep(2);
      }
    } else if (step === 2) {
      if (validateAccountInfo() && await isAvailableUsername() && await isAvailableEmail()) {
        setStep(3);
      }
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/api/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(signupFormData),
        });
        console.log(response);
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
          signupFormData={signupFormData}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      )}
      {step === 3 && (
        <PersonalInfo
          signupFormData={signupFormData}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleSubmit={handleSubmit}
          handleKeyDown={handleKeyDown}
          handlePrev={handlePrev}
        />
      )}
    </div>
  );
};

export default Signup;