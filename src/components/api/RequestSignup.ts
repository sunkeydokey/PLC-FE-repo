import axios from 'axios';
import { AuthFormValue } from '../../types/types';

export const RequestSignup = (data: AuthFormValue) =>
  axios({
    method: 'POST',
    url: 'http://192.168.0.38:3000/auth/sign-up',
    data: {
      name: data['이름'],
      email: data['이메일'],
      password: data['비밀번호'],
    },
  });
