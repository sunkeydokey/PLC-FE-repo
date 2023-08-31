import { Container } from '../components/Container';
import { SignupForm } from '../components/forms/SignupForm';

export const Signup = () => {
  return (
    <Container>
      <section className='flex bg-sky-100 rounded-xl mx-auto w-1/2 h-1/2 my-auto'>
        <SignupForm />
      </section>
    </Container>
  );
};
