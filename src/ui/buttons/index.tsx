import { ButtonType } from '@ui/types';
import type { ReactNode } from 'react';

export const Button = ({
  text,
  type,
  isPrimary,
}: {
  text: string | ReactNode;
  type: ButtonType;
  isPrimary: boolean;
}) => {
  return (
    <button
      type={type}
      className={`${
        isPrimary
          ? 'bg-sky-400 text-stone-200 hover:bg-stone-200 hover:text-sky-400 hover:border-sky-400'
          : 'bg-stone-200 text-sky-400 hover:bg-sky-400 hover:text-stone-200 hover:border-stone-200'
      } w-20 font-bold rounded-md px-2 py-1`}>
      {text}
    </button>
  );
};
