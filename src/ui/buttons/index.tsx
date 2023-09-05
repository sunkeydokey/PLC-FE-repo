type ButtonType = 'button' | 'submit' | 'reset' | undefined;

export const PrimaryButton = ({
  text,
  type,
}: {
  text: string;
  type: ButtonType;
}) => {
  return (
    <button
      type={type}
      className='w-20 bg-sky-400 text-white font-bold rounded-md px-2 py-1 border hover:bg-white hover:text-sky-400 hover:border-sky-400'>
      {text}
    </button>
  );
};
