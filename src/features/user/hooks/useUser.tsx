import { useQuery } from '@tanstack/react-query';

import { AxiosInstanceToNest as axios } from '@/utils/lib/axios';
import {
  clearStoredToken,
  getStoredToken,
  setStoredToken,
} from '@/features/user/config';

export const useUser = () => {
  const token = getStoredToken();

  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  const { data: user } = useQuery(
    ['user'],
    async ({ signal }) => {
      const { data } = await axios({
        method: 'GET',
        url: 'auth/token',
        withCredentials: true,
        signal,
      });

      if (data && 'accessToken' in data) {
        setStoredToken(data.accessToken);
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${data.accessToken}`;
      }
      return data.user ? data.user : null;
    },
    {
      onSuccess: (received) => {
        if (!received) clearStoredToken();
      },
    },
  );

  return user;
};
