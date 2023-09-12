import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useResetRecoilState, useRecoilState } from 'recoil';

import { loginState } from '@/features/user/store';
import { AxiosInstanceToNest as axios } from '@/utils/lib/axios';

export const useLogout = () => {
  const navigate = useNavigate();
  const resetLoginState = useResetRecoilState(loginState);
  const Logout = () => {
    axios.defaults.headers.common['Authorization'] = '';
    localStorage.clear();
    resetLoginState();
    navigate('/');
  };
  return Logout;
};

export const useUserLoggedIn = (needLogin: boolean = false) => {
  const [userState, setUserState] = useRecoilState(loginState);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const name = localStorage.name;
    const id = localStorage.id;

    if (!userState.isLoggedIn && name && id) {
      setUserState({
        isLoggedIn: true,
        name: name,
        id: id,
      });
      return;
    }

    if (pathname == '/') return;

    if (needLogin != userState.isLoggedIn) {
      navigate('/');
      return;
    }
  }, [setUserState, userState.isLoggedIn, needLogin, navigate, pathname]);

  return userState;
};
