import { AxiosInstanceToNest as axios } from '@/utils/lib/axios';

import type { AuthFormValue } from '@/features/user/types';

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

export const RequestLogin = (data: AuthFormValue) =>
  axios({
    method: 'POST',
    url: 'auth/login',
    data: {
      email: data['이메일'],
      password: data['비밀번호'],
    },
  });
