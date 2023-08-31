import { Container } from '../components/Container';
import { LoginForm } from '../components/forms/LoginForm';

export const Login = () => {
  return (
    <Container>
      <section className='flex h-4/5 w-9/12 bg-orange-100 rounded-lg mx-auto my-auto overflow-hidden'>
        <LoginForm />
        <div className='basis-7/12 md:block bg-[url("/factory_structure.jpg")] hidden bg-no-repeat bg-cover w-full h-full'></div>
      </section>
    </Container>
  );
};
