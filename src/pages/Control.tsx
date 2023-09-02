import { Machine } from '@/service/plc-control';

export const Control = () => {
  return (
    <div className='mx-auto w-11/12 h-full'>
      <Machine />
    </div>
  );
};
