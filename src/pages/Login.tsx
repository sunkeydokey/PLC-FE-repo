import { Container } from '../components/Container';
import { LoginForm } from '../components/forms/LoginForm';

export const Login = () => {
  return (
    <Container>
      <section className='flex bg-sky-100 rounded-xl mx-auto w-1/2 h-1/2 my-auto'>
        <LoginForm />
      </section>
    </Container>
  );
};
