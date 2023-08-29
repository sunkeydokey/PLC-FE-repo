import { ReactNode } from 'react';

export const Container = ({ children }: { children: ReactNode }) => {
  return <div className='bg-stone-700 min-h-screen w-full'>{children}</div>;
};
