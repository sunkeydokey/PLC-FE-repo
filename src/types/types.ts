import { Path, UseFormRegister, FormState } from 'react-hook-form';
import type { RegisterOptions } from 'react-hook-form';

export type SVGImage = Record<string, () => JSX.Element>;
export type NavProps = {
  path: string;
  name: string;
  needLogin: boolean;
};
export type AuthFormValue = {
  이름?: string;
  이메일: string;
  비밀번호: string;
};

export type InputProps = {
  label: Path<AuthFormValue>;
  type: string;
  register: UseFormRegister<AuthFormValue>;
  formState: FormState<AuthFormValue>;
  registerOptions?: RegisterOptions;
  message: string;
};
