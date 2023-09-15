import { LoginForm } from '@/features/user/components/forms/LoginForm';
import { FormWrapper } from '@/features/user/components/FormWrapper';

import { BackGround } from '@ui/background-images/BackGround';

export const Main = () => {
  return (
    <FormWrapper
      title={'로그인'}
      form={<LoginForm />}
      bg={<BackGround file='desk.jpg'>{null}</BackGround>}
    />
  );
};
