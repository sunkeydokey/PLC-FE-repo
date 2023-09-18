import { UserInfo } from '@/features/user/mypage/components/UserInfo';
import { Calendar } from '@/features/user/mypage/components/Calendar';
import { TodayTask } from '@/features/user/mypage/components/TodayTask';

export const Main = () => {
  return (
    <div className='w-full h-full flex justify-around items-start mb-6 gap-4'>
      <div className='w-1/3 flex flex-col justify-between gap-4 h-full ml-4'>
        <UserInfo />
        <TodayTask />
      </div>
      <div className='grow flex flex-col mr-4 h-full'>
        <Calendar />
      </div>
    </div>
  );
};
