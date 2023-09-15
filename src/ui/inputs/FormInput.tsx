import type { InputProps } from '@/features/user/types';

export const FormInput = ({
  label,
  register,
  formState,
  registerOptions,
  type,
}: InputProps) => {
  return (
    <>
      <div className='flex justify-center items-center w-4/5 mx-auto my-1'>
        <label className='basis-1/5 text-center text-stone-800'>
          {label}&nbsp;&nbsp;
        </label>
        <input
          autoComplete='off'
          className='focus:outline-none text-stone-600 basis-3/5 grow px-4 bg-inherit border-lg border-b border-stone-800'
          {...register(label, { ...registerOptions })}
          type={type}
        />
      </div>
      <div className='w-2/3 h-6 mx-auto'>
        <p className='text-sm'>
          {formState.errors[label] ? (
            <span className='text-red-500'>
              {formState.errors[label]?.message}
            </span>
          ) : (
            ''
          )}
        </p>
      </div>
    </>
  );
};
