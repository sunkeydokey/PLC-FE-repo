import { FormWrapper } from '@/features/user/components/FormWrapper';
import { SignupForm } from '@/features/user/components/forms/SignupForm';

import { BackGround } from '@ui/background-images/BackGround';

export const Main = () => {
  return (
    <FormWrapper
      title={'회원가입'}
      form={<SignupForm />}
      bg={<BackGround file='factory.jpg'>{null}</BackGround>}
    />
  );
};
