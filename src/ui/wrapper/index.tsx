import { Children } from '@ui/types';

export const Wrapper = ({ children }: Children) => {
  return (
    <div className='mx-auto w-full mt-4 h-full flex flex-col'>{children}</div>
  );
};
