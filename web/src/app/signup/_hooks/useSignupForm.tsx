import { useState, useCallback } from 'react';
import { FormDataProperties, SignupFormData } from '../_props/props';

const useSignupForm = (initialValues: SignupFormData) => {
  const [formData, setFormData] = useState<SignupFormData>(initialValues);

  const updateField = useCallback((id: keyof SignupFormData, value: Partial<FormDataProperties>) => {
    setFormData(prevState => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        ...value
      }
    }));
  }, []);

  const isValidField = useCallback((id: keyof SignupFormData, value: string) => {
    const field = formData[id];
    let isValid = false;

    if (id === 'confirmPassword') {
      isValid = value === formData.password.value && value !== '';
    } else {
      isValid = field.regex.test(value);
    }

    updateField(id, { isValid: isValid, serverErrorMessage: '' });

    return isValid;
  }, [formData, updateField]);

  const validate = useCallback(() => {
    let isValid = true;
    (Object.keys(formData) as (keyof SignupFormData)[]).forEach(key => {
      isValid = isValid && isValidField(key, formData[key].value);
    });
    return isValid;
  }, [formData, isValidField]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    updateField(id as keyof SignupFormData, { value: value, serverErrorMessage: '', validMessage: '' });
  }, [updateField]);

  const isAvailableField = useCallback(async (field: "username" | "email" | "nickname", value: string) => {
    const response = await fetch(`/api/auth/signup/check-${field}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ [field]: value }),
    });

    if (response.ok) {
      const data = await response.json();
      updateField(field as keyof SignupFormData, {
        isValid: data.available,
        serverErrorMessage: data.available ? '' : `이미 사용 중인 ${field === 'username' ? '아이디' : field === 'email' ? '이메일' : '별명'}입니다.`,
        validMessage: data.available ? `사용 가능한 ${field === 'username' ? '아이디' : field === 'email' ? '이메일' : '별명'}입니다.` : ''
      });
      return data.available;
    } else {
      updateField(field as keyof SignupFormData, { isValid: false, serverErrorMessage: "오류가 발생했습니다." });
    }

    return false;
  }, [updateField]);

  const handleFocus = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    const { id } = e.target;
    updateField(id as keyof SignupFormData, { isFocused: true });
  }, [updateField]);

  const handleBlur = useCallback(async (e: React.FocusEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const isValid = isValidField(id as keyof SignupFormData, value);
    updateField(id as keyof SignupFormData, { isFocused: false });

    if (isValid) {
      if (id === "username" || id === "email" || id === "nickname") {
        isAvailableField(id as "username" | "email" | "nickname", formData[id].value);
      }
    }
  }, [isValidField, isAvailableField, updateField, formData]);

  return {
    formData,
    handleChange,
    handleBlur,
    handleFocus,
    validate,
    updateField
  };
};

export default useSignupForm;