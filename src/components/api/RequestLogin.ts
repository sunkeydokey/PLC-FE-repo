import axios from 'axios';
import { AuthFormValue } from '../../types/types';

export const RequestLogin = (data: AuthFormValue) =>
  axios({
    method: 'POST',
    url: 'http://192.168.0.38:3000/auth/login',
    data: {
      email: data['이메일'],
      password: data['비밀번호'],
    },
  });
