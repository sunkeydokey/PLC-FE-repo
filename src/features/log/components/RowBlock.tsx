export const RowBlock = ({
  value,
  isError = false,
}: {
  value: number | string;
  isError: boolean;
}) => {
  return (
    <div
      className={`basis-auto text-center border border-stone-600 w-full ${
        isError && 'bg-yellow-200'
      }`}>
      {value}
    </div>
  );
};
