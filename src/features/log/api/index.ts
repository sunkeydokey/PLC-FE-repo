import { AxiosInstanceToFlask as axios } from '@/utils/lib/axios';

export const requestMachineLog = async (url: string) => {
  const { data } = await axios({
    method: 'GET',
    url: url,
  });
  return data;
};

export const requestTrackLogDetail = async (trackId: string | number) => {
  const { data } = await axios({
    method: 'GET',
    url: `/tracklog?track_id=${trackId}`,
  });
  return data;
};
