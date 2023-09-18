import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';

import { FormInput } from '@ui/inputs/FormInput';
import { Button } from '@ui/buttons';

import type { AuthFormValue, EditFormValue } from '@/features/user/types';

import { Regex } from '@/utils/config';
import { useRecoilState } from 'recoil';
import { loginState } from '../../store';
import { RequestEditUserInfo } from '../../api';
import { isAxiosError } from 'axios';

export const EditForm = () => {
  const { register, handleSubmit, formState } = useForm<AuthFormValue>({
    mode: 'onChange',
    shouldUnregister: true,
  });
  const [user, setLoginState] = useRecoilState(loginState);
  const [editEmail, setEditEmail] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const onSubmitHandler: SubmitHandler<AuthFormValue> = async (values) => {
    try {
      const formData: EditFormValue = {
        currentemail: user.email!,
        cngemail: values['이메일'] || user.email!,
        currentpsw: values['비밀번호'],
        cngpsw: values['변경'],
      };
      const { status } = await RequestEditUserInfo(formData);
      if (status == 200) {
        setLoginState({ ...user, email: formData.cngemail });
        navigate('/mypage');
      }
    } catch (error) {
      if (isAxiosError(error)) {
        const { response } = error;
        setMessage(response?.data.message);
      } else {
        navigate('/error');
      }
    }
  };

  return (
    <section className='w-full h-full'>
      <form
        noValidate
        className='flex flex-col justify-center gap-3 h-full w-full'
        onSubmit={handleSubmit(onSubmitHandler)}>
        {editEmail ? (
          <FormInput
            readOnly={!editEmail}
            label='이메일'
            type='email'
            placeholder={user.email as string}
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
        ) : (
          <>
            <div className='flex justify-center items-center w-4/5 mx-auto my-1 gap-1'>
              <p className='basis-1/5 text-center text-stone-800'>
                이메일&nbsp;&nbsp;
              </p>
              <p className='text-stone-600 basis-3/5 grow px-4 bg-inherit border-lg border-b border-stone-800'>
                {user.email}
              </p>
              <button
                className='border rounded bg-cyan-800 text-stone-200 hover:bg-stone-200 hover:text-cyan-800 hover:border-cyan-800 px-2'
                type='button'
                onClick={() => {
                  setEditEmail(true);
                }}>
                수정
              </button>
            </div>
            <div className='w-2/3 h-6 mx-auto'></div>
          </>
        )}

        <FormInput
          readOnly={false}
          label='비밀번호'
          type='password'
          placeholder=''
          formState={formState}
          register={register}
          registerOptions={{
            required: {
              value: true,
              message: '비밀번호를 입력해주세요.',
            },
          }}
        />
        <FormInput
          readOnly={false}
          label='변경'
          type='password'
          placeholder=''
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
        <p className='text-red-400 h-4 w-full text-center'>{message}</p>

        <div className='flex justify-center gap-4 items-center'>
          <Button isPrimary={true} text='요청' type='submit' />
          <NavLink to='/mypage'>
            <Button isPrimary={false} text={'취소'} type='button' />
          </NavLink>
        </div>
      </form>
    </section>
  );
};
