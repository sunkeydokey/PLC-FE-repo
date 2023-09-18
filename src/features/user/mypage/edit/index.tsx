import { EditForm } from '@/features/user/components/forms/EditForm';
import { FormWrapper } from '@/features/user/components/FormWrapper';

export const Main = () => {
  return (
    <FormWrapper
      title={'정보수정'}
      form={<EditForm />}
      bg={
        <div
          className={`bg-[url("/background-image/edit.jpg")] bg-no-repeat bg-cover w-full h-full`}
        />
      }
    />
  );
};
