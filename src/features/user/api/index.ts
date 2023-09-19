import { AxiosInstanceToNest as axios } from '@/utils/lib/axios';

import type { AuthFormValue, EditFormValue } from '@/features/user/types';

export const RequestSignup = (data: AuthFormValue) =>
  axios({
    method: 'POST',
    url: 'auth/sign-up',
    data: {
      name: data['이름'],
      email: data['이메일'],
      password: data['비밀번호'],
    },
  });

export const RequestLogin = (loginData: AuthFormValue) =>
  axios({
    method: 'POST',
    url: 'auth/login',
    data: {
      email: loginData['이메일'],
      password: loginData['비밀번호'],
    },
  });

export const RequestEditUserInfo = (data: EditFormValue) =>
  axios({
    method: 'PATCH',
    url: 'auth/change',
    data: {
      currentemail: data.currentemail,
      cngemail: data.cngemail,
      currentpsw: data.currentpsw,
      cngpsw: data.cngpsw,
    },
  });
