import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useResetRecoilState, useRecoilState } from 'recoil';
// import { useQuery } from '@tanstack/react-query';

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

export const useUserLoggedIn = (needLogin: boolean) => {
  const [userState, setUserState] = useRecoilState(loginState);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname == '/' || pathname == '/error') return;
    const name = localStorage.name;
    const email = localStorage.email;
    // const accessToken = localStorage.accessToken;
    // if(accessToken){

    //   const { data } = useQuery(['login'], () => {});
    // setUserState{
    // isLoggedIn: true,
    // ...data
    // }
    // }

    if (!userState.isLoggedIn && name && email) {
      setUserState({
        isLoggedIn: true,
        name: name,
        email: email,
      });
      return;
    }

    if (needLogin != userState.isLoggedIn) {
      navigate('/');
      return;
    }
  }, [setUserState, userState.isLoggedIn, needLogin, navigate, pathname]);

  return userState;
};
