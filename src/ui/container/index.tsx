import type { Children } from '@ui/types';

export const Container = ({ children }: Children) => {
  return (
    <div className='bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 w-full flex flex-col'>
      {children}
    </div>
  );
};
