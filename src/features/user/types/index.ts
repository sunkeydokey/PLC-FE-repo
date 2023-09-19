import { Path, UseFormRegister, FormState } from 'react-hook-form';
import type { RegisterOptions } from 'react-hook-form';

export type AuthFormValue = {
  이름?: string;
  이메일?: string;
  비밀번호: string;
  변경: string;
};

export type EditFormValue = {
  currentemail: string;
  cngemail: string;
  currentpsw: string;
  cngpsw: string;
};

export type User = {
  accessToken: string;
  email: string;
  name: string;
};

export type InputProps = {
  label: Path<AuthFormValue>;
  type: string;
  register: UseFormRegister<AuthFormValue>;
  formState: FormState<AuthFormValue>;
  registerOptions?: RegisterOptions;
  readOnly: boolean;
  placeholder: string;
};

export type LoginState = {
  isLoggedIn: boolean;
  email: string | null;
  name: string | null;
};

export interface Schedule {
  email: string;
  date: string;
  title: string;
  description: string;
  category: string;
}

export interface receivedSchedule extends Schedule {
  id: number;
}
