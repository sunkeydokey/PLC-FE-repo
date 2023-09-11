export const RowBlock = ({
  value,
  isError = false,
}: {
  value: number | string;
  isError: boolean;
}) => {
  return (
    <div
      className={` basis-auto text-center border w-full ${
        isError && 'bg-yellow-200'
      }`}>
      {value}
    </div>
  );
};
