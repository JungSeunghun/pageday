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
    username: '',
    email: '',
    emailCode: '',
    password: '',
    confirmPassword: '',
    nickname: '',
    name: '',
    year: '',
    month: '',
    day: '',
    phone1: '',
    phone2: '',
    phone3: '',
  });
  const [errors, setErrors] = useState<Partial<SignupFormData>>({});
  const [agreements, setAgreements] = useState({
    privacy: false,
    terms: false,
    all: false,
  });
  
  const validateField = (id: keyof SignupFormData, value: string) => {
    switch (id) {
      case 'name':
        if (!regexPatterns.name.test(value)) {
          return '2자 이상 30자 이하의 한글 또는 영문자';
        }
        break;
      case 'username':
        if (!regexPatterns.username.test(value)) {
          return '4자 이상 16자 이하의 소문자 영문자와 숫자';
        }
        break;
      case 'email':
        if (!regexPatterns.email.test(value)) {
          return '잘못된 이메일 주소';
        }
        break;
      case 'nickname':
        if (!regexPatterns.nickname.test(value)) {
          return '2자 이상 10자 이하의 한글, 영문자 또는 숫자';
        }
        break;
      case 'password':
        if (!regexPatterns.password.test(value)) {
          return '8자 이상 16자 이하의 대문자, 소문자, 숫자, 특수문자 하나 이상 포함';
        }
        break;
      case 'confirmPassword':
        if (value !== signupFormData.password) {
          return '비밀번호가 일치하지 않음';
        }
        break;
      case 'year':
        if (!regexPatterns.year.test(value)) {
          return '예: 1990';
        }
        break;
      case 'month':
        if (!regexPatterns.month.test(value)) {
          return '예: 1, 12';
        }
        break;
      case 'day':
        if (!regexPatterns.day.test(value)) {
          return '예: 1, 31';
        }
        break;
      case 'phone1':
        if (!regexPatterns.phone1.test(value)) {
          return '2-3자리 숫자';
        }
        break;
      case 'phone2':
        if (!regexPatterns.phone2.test(value)) {
          return '3-4자리 숫자';
        }
        break;
      case 'phone3':
        if (!regexPatterns.phone3.test(value)) {
          return '4자리 숫자';
        }
        break;
      default:
        return '';
    }

    return '';
  };

  const validate = () => {
    const newErrors: Partial<SignupFormData> = {};

    (Object.keys(signupFormData) as (keyof SignupFormData)[]).forEach(key => {
      const error = validateField(key, signupFormData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateAccountInfo = () => {
    const newErrors: Partial<AccountInfoData> = {};

    const accountInfoKeys: (keyof AccountInfoData)[] = ['username', 'email', 'password', 'confirmPassword'];
  
    accountInfoKeys.forEach(key => {
      const error = validateField(key, signupFormData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const validatePersonalInfo = () => {
    const newErrors: Partial<PersonalInfoData> = {};

    const accountInfoKeys: (keyof PersonalInfoData)[] = ['nickname', 'name', 'year', 'month', 'day', 'phone1', 'phone2', 'phone3'];
  
    accountInfoKeys.forEach(key => {
      const error = validateField(key, signupFormData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setSignupForData(prevState => ({ ...prevState, [id]: value }));
    if (errors[id as keyof SignupFormData]) {
      setErrors(prevState => ({ ...prevState, [id]: '' }));
    }
  };

  const isAvailableUsername = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/api/signup/check-username`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "username": signupFormData.username }),
    });

    if (response) {
      if(response.ok) {
        const data = await response.json();
        if(data.available == false) {
          setErrors(prevState => ({ ...prevState, "username": '존재하는 아이디입니다.' }));
        } else {
          return true;
        }
      } else {
        setErrors(prevState => ({ ...prevState, "username": '오류가 발생했습니다.' }));
      }
    } else {
      setErrors(prevState => ({ ...prevState, "username": '' }));
    }

    return false;
  }

  const isAvailableEmail = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/api/signup/check-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "email": signupFormData.email }),
    });

    if (response) {
      if(response.ok) {
        const data = await response.json();
        if(data.available == false) {
          setErrors(prevState => ({ ...prevState, "email": '존재하는 이메일입니다.' }));
        } else {
          return true;
        }
      } else {
        setErrors(prevState => ({ ...prevState, "email": '오류가 발생했습니다.' }));
      }
    } else {
      setErrors(prevState => ({ ...prevState, "email": '' }));
    }

    return false;
  }

  const isAvailableNickname = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/api/signup/check-nickname`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "nickname": signupFormData.nickname }),
    });

    if (response) {
      if(response.ok) {
        const data = await response.json();
        if(data.available == false) {
          setErrors(prevState => ({ ...prevState, "nickname": '존재하는 별명입니다.' }));
        } else {
          return true;
        }
      } else {
        setErrors(prevState => ({ ...prevState, "nickname": '오류가 발생했습니다.' }));
      }
    } else {
      setErrors(prevState => ({ ...prevState, "nickname": '' }));
    }

    return false;
  }

  const handleBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const error = validateField(id as keyof SignupFormData, value);
    if (error) {
      setErrors(prevState => ({ ...prevState, [id]: error }));
    } else {
      setErrors(prevState => ({ ...prevState, [id]: '' }));
    }

    if(!error) {
      try {
        if(id === "username") {
          isAvailableUsername();
        } else if(id === "email") {
          isAvailableEmail();
        } else if (id === "nickname") {
          isAvailableNickname();
        }
      } catch (error) {
        setErrors(prevState => ({ ...prevState, [id]: '오류가 발생했습니다.' }));
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!/[0-9]/.test(e.key) && !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key) && !(e.ctrlKey || e.metaKey)) {
      e.preventDefault();
    }
  };

  const handleNext = () => {
    if (step === 1) {
      if (agreements.privacy && agreements.terms) {
        setStep(2);
      }
    } else if (step === 2) {
      if (validateAccountInfo() && isAvailableUsername() && isAvailableEmail()) {
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
          errors={errors}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      )}
      {step === 3 && (
        <PersonalInfo
          signupFormData={signupFormData}
          errors={errors}
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