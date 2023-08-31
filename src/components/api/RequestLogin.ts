import { AxiosInstance as axios } from './CredentialAxios';
import { AuthFormValue } from '../../types/types';

export const RequestLogin = (data: AuthFormValue) =>
  axios({
    method: 'POST',
    url: 'auth/login',
    data: {
      email: data['이메일'],
      password: data['비밀번호'],
    },
  });
