import { ButtonType } from '@ui/types';

export const ConditionalButton = ({
  condition,
  text,
  type,
  onClick,
}: {
  condition: boolean;
  text: string;
  type: ButtonType;
  onClick: () => void;
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={condition}
      className='rounded-md px-2 py-1 bg-slate-200 disabled:bg-slate-600'>
      {text}
    </button>
  );
};
