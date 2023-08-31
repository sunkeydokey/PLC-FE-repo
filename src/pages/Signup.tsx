import { Container } from '../components/Container';
import { SignupForm } from '../components/forms/SignupForm';

export const Signup = () => {
  return (
    <Container>
      <section className='flex h-4/5 w-3/5 bg-white rounded-lg mx-auto my-auto overflow-hidden'>
        <SignupForm />
        <div className='bg-[url("/factory.jpg")] bg-no-repeat bg-cover w-full h-full'></div>
      </section>
    </Container>
  );
};
