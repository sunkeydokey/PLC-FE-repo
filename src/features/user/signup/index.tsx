import { FormWrapper } from '@/features/user/components/FormWrapper';
import { SignupForm } from '@/features/user/components/forms/SignupForm';

export const Main = () => {
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
