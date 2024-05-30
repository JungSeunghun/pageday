interface FormData {
  value: string;
  isValid: boolean;
  errorMessage: string;
  regex: RegExp;
}

export interface SignupFormData {
  username: FormData;
  email: FormData;
  emailCode: FormData;
  password: FormData;
  confirmPassword: FormData;
  nickname: FormData;
  name: FormData;
  year: FormData;
  month: FormData;
  day: FormData;
  phone1: FormData;
  phone2: FormData;
  phone3: FormData;
}

export interface CheckValidates {
  username: false,
  email: false,
  emailCode: false,
  password: false,
  confirmPassword: false,
  nickname: false,
  name: false,
  year: false,
  month: false,
  day: false,
  phone1: false,
  phone2: false,
  phone3: false
}

export interface AccountInfoData {
  username: string;
  email: string;
  emailCode: string;
  password: string;
  confirmPassword: string;
}

export interface PersonalInfoData {
  nickname: string;
  name: string;
  year: string;
  month: string;
  day: string;
  phone1: string;
  phone2: string;
  phone3: string;
}

export interface AgreementsProps {
  agreements: {
    privacy: boolean;
    terms: boolean;
    all: boolean;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext: () => void;
}

export interface AccountInfoProps {
  signupFormData: SignupFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleNext: () => void;
  handlePrev: () => void;
}

export interface PersonalInfoProps {
  signupFormData: SignupFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handlePrev: () => void;
}
