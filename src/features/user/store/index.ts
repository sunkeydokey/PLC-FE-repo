import { atom } from 'recoil';

import type { LoginState } from '@/features/user/types';

export const loginState = atom<LoginState>({
  key: 'loginState',
  default: { isLoggedIn: false, id: null, name: null },
});
