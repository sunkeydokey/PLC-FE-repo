import { useForm, SubmitHandler } from 'react-hook-form';
import type { LoginFormValue } from '../../types/types';
import { FormInput } from './FormInput';
const Regex = { email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g };

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormValue>();

  const onSubmitHandler: SubmitHandler<LoginFormValue> = (data) => {
    console.log(data);
  };

  return (
    <section>
      <form
        className='flex flex-col gap-3'
        onSubmit={handleSubmit(onSubmitHandler)}>
        <div>
          <label>name</label>
          <input {...register('name')} />
        </div>
        <div>
          <label>nickname</label>
          <input {...register('nickname')} />
        </div>
        <div>
          <label>email</label>
          <input {...register('email')} type='email' />
        </div>
        <div>
          <label>password</label>
          <input {...register('password')} type='password' />
        </div>
        <div>
          <label>password_confirm</label>
          <input {...register('password_confirm')} type='password' />
        </div>
      </form>
    </section>
  );
};
