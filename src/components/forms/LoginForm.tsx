import { useForm, SubmitHandler } from 'react-hook-form';
import type { AuthFormValue } from '../../types/types';
import { FormInput } from './FormInput';
import { RequestLogin } from '../api/RequestLogin';
import { useNavigate } from 'react-router-dom';
const Regex = {
  email:
    /^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]+@[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]+(.[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]+)+$/,
};

export const LoginForm = () => {
  const { register, handleSubmit, formState } = useForm<AuthFormValue>({
    reValidateMode: 'onChange',
    shouldUnregister: true,
    defaultValues: {
      이메일: '',
      비밀번호: '',
    },
  });
  const navigate = useNavigate();
  const onSubmitHandler: SubmitHandler<AuthFormValue> = async (values) => {
    try {
      const { data } = await RequestLogin(values);
      console.log(data);
      navigate('/');
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
        message='이메일을 입력해주세요.'
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
        message='비밀번호를 입력해주세요'
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
