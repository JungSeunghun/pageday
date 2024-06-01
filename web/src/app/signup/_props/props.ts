export interface FormDataProperties {
  value: string;
  isValid: boolean;
  isFocused: boolean;
  regexErrorMessage: string;
  serverErrorMessage: string;
  validMessage: string;
  regex: RegExp;
}

export interface SignupFormData {
  username: FormDataProperties;
  email: FormDataProperties;
  emailCode: FormDataProperties;
  password: FormDataProperties;
  confirmPassword: FormDataProperties;
  nickname: FormDataProperties;
  name: FormDataProperties;
  year: FormDataProperties;
  month: FormDataProperties;
  day: FormDataProperties;
  phone1: FormDataProperties;
  phone2: FormDataProperties;
  phone3: FormDataProperties;
}

const createField = (regexErrorMessage: string, regex: RegExp): FormDataProperties => ({
  value: '',
  isValid: false,
  isFocused: false,
  regexErrorMessage,
  serverErrorMessage: '',
  validMessage: '',
  regex
});

export const initialSignupFormData: SignupFormData = {
  name: createField('2자 이상 30자 이하의 한글 또는 영문자', /^[가-힣a-zA-Z\s]{2,30}$/),
  username: createField('4자 이상 16자 이하의 소문자 영문자와 숫자', /^(?=.*[a-z])[a-z0-9]{4,16}$/),
  email: createField('잘못된 이메일 주소입니다.', /^[^\s@]+@[^\s@]+\.[^\s@]+$/),
  emailCode: createField('잘못된 보안코드입니다.', /^\d{6}$/),
  password: createField('8자 이상 16자 이하의 대문자, 소문자, 숫자, 특수문자 하나 이상 포함', /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/),
  confirmPassword: createField('비밀번호가 일치하지 않습니다.', /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/),
  nickname: createField('2자 이상 10자 이하의 한글, 영문자 또는 숫자', /^(?=.*[가-힣a-zA-Z])[가-힣a-zA-Z0-9]{2,10}$/),
  year: createField('예: 1990', /^(19\d{2}|20\d{2})$/),
  month: createField('예: 1, 12', /^(1[0-2]|[1-9])$/),
  day: createField('예: 1, 31', /^(3[01]|[12][0-9]|[1-9])$/),
  phone1: createField('2-3자리 숫자', /^\d{2,3}$/),
  phone2: createField('3-4자리 숫자', /^\d{3,4}$/),
  phone3: createField('4자리 숫자', /^\d{4}$/)
};

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
  handleFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  updateField: (id: keyof SignupFormData, value: Partial<FormDataProperties>) => void;
}

export interface PersonalInfoProps {
  signupFormData: SignupFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handlePrev: () => void;
  handleFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
}
