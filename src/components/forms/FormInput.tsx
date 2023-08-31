import type { InputProps } from '../../types/types';

export const FormInput = ({
  label,
  register,
  formState,
  registerOptions,
  type,
}: InputProps) => {
  return (
    <>
      <div className='flex justify-center items-center w-2/3 mx-auto border-4 my-1'>
        <label className='border-r-2 basis-1/3 px-3 text-center'>{label}</label>
        <input
          className='focus:outline-none basis-2/5 grow'
          {...register(label, { ...registerOptions })}
          type={type}
        />
      </div>
      <div className='w-2/3 h-6 mx-auto'>
        <p className='text-sm'>
          {formState.errors[label] && (
            <span className='text-red-500'>
              {formState.errors[label]?.message}
            </span>
          )}
        </p>
      </div>
    </>
  );
};
