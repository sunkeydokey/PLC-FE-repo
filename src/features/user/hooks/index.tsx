import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useResetRecoilState, useRecoilState } from 'recoil';

import { loginState } from '@/features/user/store';
import { AxiosInstance } from '@/utils/lib/axios';

export const useLogout = () => {
  const navigate = useNavigate();
  const resetLoginState = useResetRecoilState(loginState);
  const Logout = () => {
    AxiosInstance.defaults.headers.common['Authorization'] = '';
    localStorage.clear();
    resetLoginState();
    navigate('/');
  };
  return Logout;
};

export const useUserLoggedIn = () => {
  const [userState, setUserState] = useRecoilState(loginState);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const name = localStorage.name;
    const id = localStorage.id;
    const needLogin: {
      [key: string]: boolean;
    } = {
      dashboard: true,
      log: true,
      control: true,
      profile: true,
      login: false,
      signup: false,
    };

    if (!userState.isLoggedIn && name && id) {
      setUserState({
        isLoggedIn: true,
        name: name,
        id: id,
      });
      return;
    }

    if (pathname == '/') return;

    if (needLogin[pathname.slice(1)] != userState.isLoggedIn) {
      navigate('/');
      return;
    }
  }, [setUserState, userState.isLoggedIn, navigate, pathname]);
};
