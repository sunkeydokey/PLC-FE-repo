import { Children } from '@ui/types';

export const Wrapper = ({ children }: Children) => {
  return <div className='w-full h-full flex flex-col'>{children}</div>;
};
