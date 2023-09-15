import { ProgressBar } from '@ui/fetchingHandlers/ProgressBar';

export const LoadingHandler = ({
  title,
  isLoading,
}: {
  title: string;
  isLoading: boolean;
}) => {
  return (
    <div className='flex flex-col justify-start'>
      <div className='w-full basis-1/4 mt-1'>
        <h3 className='text-center text-stone-200 font-semibold'>{title}</h3>
      </div>
      <div className='basis-3/4'>{isLoading && <ProgressBar />}</div>
    </div>
  );
};
