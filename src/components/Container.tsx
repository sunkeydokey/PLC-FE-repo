import { ReactNode } from 'react';

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className='bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 min-h-screen w-full flex flex-col'>
      <div className='mx-8'>{children}</div>
    </div>
  );
};
