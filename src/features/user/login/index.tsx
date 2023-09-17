import { LoginForm } from '@/features/user/components/forms/LoginForm';
import { FormWrapper } from '@/features/user/components/FormWrapper';

export const Main = () => {
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
