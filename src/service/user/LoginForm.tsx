import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { useForm, SubmitHandler } from 'react-hook-form';

import { FormInput } from '@/service/user/FormInput';
import { RequestLogin } from '@/utils/api/RequestLogin';

import type { AuthFormValue } from '@/types';

import { loginState } from '@/states/client';

import { AxiosInstance } from '@/utils/api/CredentialAxios';
import { Regex } from '@/utils/config';

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
      <button type='submit'>로그인</button>
    </form>
  );
};
