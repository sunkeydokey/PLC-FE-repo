import { SlideProps } from '@/types';

export const Slide = ({
  label,
  min,
  max,
  step,
  value,
  setValue,
}: SlideProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.valueAsNumber);
  };
  return (
    <div className='mb-2'>
      <label
        htmlFor='minmax-range'
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
        {label}
      </label>
      <input
        id='minmax-range'
        type='range'
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        step={step}
        className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
      />
    </div>
  );
};
