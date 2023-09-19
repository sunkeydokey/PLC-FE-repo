import { Navigate } from 'react-router-dom';

import { FormWrapper } from '@/features/user/components/FormWrapper';
import { SignupForm } from '@/features/user/components/forms/SignupForm';

import { useUser } from '@/features/user/hooks/useUser';

export const Main = () => {
  const user = useUser();
  if (user) return <Navigate to='/mypage' />;

  return (
    <FormWrapper
      title={'등록'}
      form={<SignupForm />}
      bg={
        <div
          className={`bg-[url("/background-image/factory.jpg")] bg-no-repeat bg-cover w-full h-full`}
        />
      }
    />
  );
};
