import { SignupForm } from '@/service/user/SignupForm';

export const Signup = () => {
  return (
    <section className='flex h-4/5 w-3/5 bg-white rounded-lg mx-auto my-auto overflow-hidden'>
      <SignupForm />
      <div className='bg-[url("/factory.jpg")] bg-no-repeat bg-cover w-full h-full'></div>
    </section>
  );
};
