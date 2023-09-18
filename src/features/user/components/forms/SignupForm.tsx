import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { isAxiosError } from 'axios';

import { FormInput } from '@ui/inputs/FormInput';

import { RequestSignup } from '@/features/user/api';
import { Regex } from '@/utils/config';

import type { AuthFormValue } from '@/features/user/types';
import { Button } from '@ui/buttons';

export const SignupForm = () => {
  const { register, handleSubmit, formState } = useForm<AuthFormValue>({
    mode: 'onChange',
    shouldUnregister: true,
    defaultValues: {
      이메일: '',
      이름: '',
      비밀번호: '',
    },
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const onSubmitHandler: SubmitHandler<AuthFormValue> = async (values) => {
    try {
      const { data } = await RequestSignup(values);
      if (data) {
        navigate('/login');
      }
    } catch (error) {
      if (isAxiosError(error)) {
        const { response } = error;
        setMessage(response?.data.message);
      }
    }
  };

  return (
    <section className='w-full h-full'>
      <form
        noValidate
        className='flex flex-col justify-center gap-3 h-full w-full'
        onSubmit={handleSubmit(onSubmitHandler)}>
        <FormInput
          label='이름'
          type='text'
          formState={formState}
          register={register}
          placeholder=''
          readOnly={false}
          registerOptions={{
            required: {
              value: true,
              message: '이름을 입력해주세요.',
            },
            pattern: {
              value: Regex.name,
              message: '한글로만 이름을 입력해주세요.',
            },
            minLength: {
              value: 2,
              message: '최소 2글자 이상의 이름을 입력해주세요.',
            },
            maxLength: {
              value: 10,
              message: '최대 10글자 이하의 이름을 입력해주세요.',
            },
          }}
        />

        <FormInput
          label='이메일'
          type='email'
          formState={formState}
          register={register}
          placeholder=''
          readOnly={false}
          registerOptions={{
            required: {
              value: true,
              message: '이메일을 입력해주세요.',
            },
            pattern: {
              value: Regex.email,
              message: '올바른 이메일 형식을 입력해주세요.',
            },
          }}
        />

        <FormInput
          label='비밀번호'
          type='password'
          formState={formState}
          register={register}
          placeholder=''
          readOnly={false}
          registerOptions={{
            required: {
              value: true,
              message: '비밀번호를 입력해주세요.',
            },
            minLength: {
              value: 4,
              message: '4글자 이상의 비밀번호를 입력해주세요.',
            },
          }}
        />
        <p className='text-red-400 h-4 w-full text-center'>{message}</p>

        <div className='flex justify-center gap-4 items-center'>
          <Button isPrimary={true} text='회원가입' type='submit' />
          <NavLink to='/login'>
            <Button isPrimary={false} text={'로그인'} type='button' />
          </NavLink>
        </div>
      </form>
    </section>
  );
};
