import { AxiosInstance as axios } from '@/utils/lib/axios';

import type { AuthFormValue } from '@/features/user/types';

export const RequestLogin = (data: AuthFormValue) =>
  axios({
    method: 'POST',
    url: 'auth/login',
    data: {
      email: data['이메일'],
      password: data['비밀번호'],
    },
  });
