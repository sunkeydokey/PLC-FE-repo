import { AxiosInstance as axios } from '@/utils/lib/axios';

export const requestMachineLog = async (url: string) => {
  const { data } = await axios({
    method: 'GET',
    url: url,
  });
  return data;
};
