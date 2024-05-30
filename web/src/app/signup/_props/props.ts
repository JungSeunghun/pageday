export interface SignupFormData {
  username: string;
  email: string;
  emailCode: string;
  password: string;
  confirmPassword: string;
  nickname: string;
  name: string;
  year: string;
  month: string;
  day: string;
  phone1: string;
  phone2: string;
  phone3: string;
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
  errors: Partial<SignupFormData>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleNext: () => void;
  handlePrev: () => void;
}

export interface PersonalInfoProps {
  signupFormData: SignupFormData;
  errors: Partial<SignupFormData>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handlePrev: () => void;
}
