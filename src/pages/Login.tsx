import { LoginForm } from '@/service/user/LoginForm';

export const Login = () => {
  return (
    <section className='flex h-4/5 w-9/12 bg-orange-100 rounded-lg mx-auto my-auto overflow-hidden'>
      <LoginForm />
      <div className='basis-7/12 md:block bg-[url("/factory_structure.jpg")] hidden bg-no-repeat bg-cover w-full h-full'></div>
    </section>
  );
};
