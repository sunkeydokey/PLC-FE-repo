import { UserInfo } from '@/features/user/profile/components/UserInfo';
import { Calendar } from '@/features/user/profile/components/Calendar';

export const Main = () => {
  return (
    <div className='w-full h-full flex'>
      <div className='basis-1/2'>
        <UserInfo />
      </div>
      <Calendar />
    </div>
  );
};
