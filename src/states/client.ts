import type { LoginState } from '@/types';
import { atom } from 'recoil';

export const loginState = atom<LoginState>({
  key: 'loginState',
  default: { isLoggedIn: false, id: null, name: null },
});