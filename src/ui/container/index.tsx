import type { Children } from '@ui/types';

export const Container = ({ children }: Children) => {
  return (
    <div className='bg-gradient-to-br from-[#17222E] via-[#151F2B] to-[#17222E] w-full h-full flex flex-col'>
      {children}
    </div>
  );
};
