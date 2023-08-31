import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

import { FormInput } from './FormInput';
import { RequestSignup } from '../api/RequestSignup';

import type { AuthFormValue } from '../../types/types';

const Regex = {
  name: /^[가-힣]+$/,
  email:
    /^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]+@[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]+(.[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]+)+$/,
};
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
  const [signupMessage, setSignupMessage] = useState('');
  const navigate = useNavigate();

  const onSubmitHandler: SubmitHandler<AuthFormValue> = async (values) => {
    try {
      const { data } = await RequestSignup(values);
      console.log(data);
      setSignupMessage('회원가입에 성공했습니다.');
      navigate('/');
    } catch (error) {
      setSignupMessage('회원가입에 실패했습니다.');
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
        <button type='submit'>회원가입</button>
        {signupMessage}
      </form>
    </section>
  );
};
