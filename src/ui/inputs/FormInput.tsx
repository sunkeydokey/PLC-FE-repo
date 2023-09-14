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
        <label className='basis-1/3 px-3 text-end'>{label}&nbsp;&nbsp;</label>
        <input
          autoComplete='off'
          className='focus:outline-none basis-2/5 grow px-4 bg-inherit border-lg border-b border-stone-800'
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
