import { ReactNode } from 'react';

export const FormWrapper = ({
  title,
  form,
  bg,
}: {
  title: string;
  form: ReactNode;
  bg: ReactNode | undefined;
}) => {
  return (
    <section className='flex h-4/5 w-3/5 bg-stone-300 rounded-lg mx-auto my-auto overflow-hidden'>
      <div className='w-full'>
        <h2 className='font-semibold pl-4 pt-4 text-stone-700'>{title}</h2>
        {form}
      </div>
      {bg}
    </section>
  );
};
