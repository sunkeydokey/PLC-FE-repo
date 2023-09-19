import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { isAxiosError } from 'axios';

import { FormInput } from '@ui/inputs/FormInput';
import { Button } from '@ui/buttons';

import { RequestLogin } from '@/features/user/api';
import { AxiosInstanceToNest as axios } from '@/utils/lib/axios';
import { Regex } from '@/utils/config';

import { setStoredToken } from '@/features/user/config';
import type { AuthFormValue } from '@/features/user/types';

export const LoginForm = () => {
  const { register, handleSubmit, formState } = useForm<AuthFormValue>({
    mode: 'onChange',
    shouldUnregister: true,
    defaultValues: {
      이메일: '',
      비밀번호: '',
    },
  });
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const onSubmitHandler: SubmitHandler<AuthFormValue> = async (values) => {
    try {
      const { data } = await RequestLogin(values);

      const { accessToken } = data;
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

      setStoredToken(accessToken);

      navigate('/');
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
          readOnly={false}
          label='이메일'
          type='email'
          formState={formState}
          register={register}
          placeholder=''
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
          readOnly={false}
          label='비밀번호'
          type='password'
          formState={formState}
          register={register}
          placeholder=''
          registerOptions={{
            required: {
              value: true,
              message: '비밀번호를 입력해주세요.',
            },
          }}
        />
        <p className='text-red-400 h-4 w-full text-center'>{message}</p>
        <div className='flex justify-center gap-4 items-center'>
          <Button isPrimary={true} text='로그인' type='submit' />
          <NavLink to='/signup'>
            <Button isPrimary={false} text={'회원가입'} type='button' />
          </NavLink>
        </div>
      </form>
    </section>
  );
};
