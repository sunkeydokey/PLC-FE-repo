import React from 'react';
import type { UseFormRegister } from 'react-hook-form';
import type { LoginFormValue } from '../../types/types';

type InputProps = {
  register: UseFormRegister<LoginFormValue>;
  type: string | undefined;
  name: 'string';
  labelName: 'string';
};

export const FormInput = ({ register, type, labelName }: InputProps) => {
  return (
    <div>
      <label>{labelName}</label>
      <input {...register} type={type} />
    </div>
  );
};
