import { Navigate } from 'react-router-dom';

import { LoginForm } from '@/features/user/components/forms/LoginForm';
import { FormWrapper } from '@/features/user/components/FormWrapper';

import { useUser } from '../hooks/useUser';

export const Main = () => {
  const user = useUser();
  if (user) return <Navigate to='/mypage' />;
  return (
    <FormWrapper
      title={'로그인'}
      form={<LoginForm />}
      bg={
        <div
          className={`bg-[url("/background-image/desk.jpg")] bg-no-repeat bg-cover w-full h-full`}
        />
      }
    />
  );
};
