import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

export const MonthDirection = ({
  previousMonth,
  nextMonth,
  text,
}: {
  previousMonth: () => void;
  nextMonth: () => void;
  text: string;
}) => {
  return (
    <div className='flex items-center justify-around py-4 w-1/2 mx-auto'>
      <button
        type='button'
        onClick={previousMonth}
        className='-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-200 hover:text-gray-500'>
        <span className='sr-only'>Previous month</span>
        <ChevronLeftIcon
          className='w-5 h-5 fill-yellow-300 hover:fill-yellow-200 border border-yellow-300 hover:border-yellow-200 rounded'
          aria-hidden='true'
        />
      </button>
      <h2 className='w-2/3 text-center font-semibold text-stone-100'>{text}</h2>
      <button
        onClick={nextMonth}
        type='button'
        className='-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-200 hover:text-gray-500'>
        <span className='sr-only'>Next month</span>
        <ChevronRightIcon
          className='w-5 h-5 fill-yellow-300 hover:fill-yellow-200 border border-yellow-300 hover:border-yellow-200 rounded'
          aria-hidden='true'
        />
      </button>
    </div>
  );
};
