import { Navigate } from 'react-router-dom';
import { EditForm } from '@/features/user/components/forms/EditForm';
import { FormWrapper } from '@/features/user/components/FormWrapper';

import { useUser } from '@/features/user/hooks/useUser';

export const Main = () => {
  const user = useUser();
  if (!user) return <Navigate to='/login' />;

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
