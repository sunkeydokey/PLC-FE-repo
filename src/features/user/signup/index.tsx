import { SignupForm } from '@/features/user/signup/Form';

export const Main = () => {
  return (
    <section className='flex h-4/5 w-3/5 bg-stone-200 rounded-lg mx-auto my-auto overflow-hidden'>
      <div className='w-full'>
        <h2 className='font-semibold pl-4 pt-4 text-stone-700'>SignUp</h2>
        <SignupForm />
      </div>
      <div className='bg-[url("/factory.jpg")] bg-no-repeat bg-cover w-full h-full' />
    </section>
  );
};
