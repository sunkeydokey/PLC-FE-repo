import { AxiosInstanceToNest as axios } from '@/utils/lib/axios';
import { Schedule, receivedSchedule } from '@/features/user/types';

export const requestPostSchedule = (data: Schedule) =>
  axios({
    method: 'POST',
    url: '/schedule/posting',
    data,
  });

export const requestScheduleOfDate = async (
  date: string,
  email: string,
): Promise<receivedSchedule[]> => {
  const { data } = await axios({
    method: 'GET',
    url: `/schedule/getmyschedule?date=${date}&email=${email}`,
  });
  return data;
};

export const requestUpdateSchedule = async (scheduleData: {
  id: number | undefined;
  title: string;
  description: string;
  category: string;
}) => {
  await axios({
    method: 'PATCH',
    url: '/schedule/updateschedule',
    data: scheduleData,
  });
};

export const requestDeleteSchedule = async (scheduleInfo: {
  id: number;
  email: string;
}) => {
  const { data } = await axios({
    method: 'DELETE',
    url: '/schedule/deleteschedule',
    data: scheduleInfo,
  });
  return data;
};
