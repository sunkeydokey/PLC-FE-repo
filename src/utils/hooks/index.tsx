import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useResetRecoilState, useRecoilState } from 'recoil';

import { loginState } from '@/states/client';
import { AxiosInstance } from '@/utils/api/CredentialAxios';

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

    type NeedLoginLinks = {
      [key: string]: boolean;
    };
    const needLogin: NeedLoginLinks = {
      dashboard: true,
      log: true,
      control: true,
      profile: true,
      login: false,
      signup: false,
    };

    if (userState.isLoggedIn) return;
    if (name && id) {
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
    }
  }, [pathname, userState.isLoggedIn, setUserState, navigate]);
};
