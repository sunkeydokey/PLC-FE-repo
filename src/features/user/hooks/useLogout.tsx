import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

import { AxiosInstanceToNest as axios } from '@/utils/lib/axios';

import { clearStoredToken } from '@/features/user/config';

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const Logout = () => {
    axios.defaults.headers.common['Authorization'] = '';
    clearStoredToken();
    navigate('/');
    queryClient.resetQueries({ queryKey: ['user'], exact: true });
  };
  return Logout;
};
