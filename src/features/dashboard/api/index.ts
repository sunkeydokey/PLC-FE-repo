import { AxiosInstanceToFlask as axios } from '@/utils/lib/axios';

export const requestMisconductRatio = async (start: string, end: string) => {
  const { data } = await axios({
    method: 'GET',
    url: `/misconduct?start=${start}&end=${end}`,
  });

  return data.results;
};

export const requestMalfunctiontRatio = async (start: string, end: string) => {
  const { data } = await axios({
    method: 'GET',
    url: `/malfunction?start=${start}&end=${end}`,
  });
  return data.results;
};

export const requestSupplyRunRatio = async (start: string, end: string) => {
  const { data } = await axios({
    method: 'GET',
    url: `/hastrack?start=${start}&end=${end}`,
  });
  return data.results;
};

export const requestDiceLog = async (start: string, end: string) => {
  const { data } = await axios({
    method: 'GET',
    url: `/dicelog?start=${start}&end=${end}`,
  });
  return data.results;
};

export const requestGasLog = async (start: string, end: string) => {
  const { data } = await axios({
    method: 'GET',
    url: `/gaslog?start=${start}&end=${end}`,
  });
  return data.results;
};

export const requestOperationRecord = async (start: string, end: string) => {
  const { data } = await axios({
    method: 'GET',
    url: `/operation?start=${start}&end=${end}`,
  });
  return data.results;
};
