import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { useForm, SubmitHandler } from 'react-hook-form';

import { FormInput } from '@ui/inputs/FormInput';
import { PrimaryButton } from '@ui/buttons';

import { RequestLogin } from '@/features/user/api';
import { loginState } from '@/features/user/store';
import { AxiosInstance } from '@/utils/lib/axios';
import { Regex } from '@/utils/config';

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

  const setLoginState = useSetRecoilState(loginState);

  const navigate = useNavigate();
  const onSubmitHandler: SubmitHandler<AuthFormValue> = async (values) => {
    try {
      const { data, status } = await RequestLogin(values);

      if (status === 201) {
        const { accessToken, id, name } = data;
        AxiosInstance.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${accessToken}`;

        localStorage['name'] = name;
        localStorage['id'] = id;

        setLoginState({
          isLoggedIn: true,
          id: id,
          name: name,
        });

        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      noValidate
      className='flex flex-col justify-center gap-3 w-full'
      onSubmit={handleSubmit(onSubmitHandler)}>
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
        }}
      />
      <PrimaryButton type='submit' text='로그인' />
    </form>
  );
};
