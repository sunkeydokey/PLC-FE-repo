export const links = [
  { path: '/dashboard', name: 'DashBoard', needLogin: true },
  { path: '/control', name: 'Control', needLogin: true },
  { path: '/log', name: 'Log', needLogin: true },
  { path: '/profile', name: 'Profile', needLogin: true },
  { path: '/login', name: 'Login', needLogin: false },
  { path: '/signup', name: 'Signup', needLogin: false },
  { path: '/logout', name: 'Logout', needLogin: true },
];

export const KoreanLinkDescription = [
  { path: '/dashboard', name: '대시보드', needLogin: true },
  { path: '/control', name: 'PLC제어', needLogin: true },
  { path: '/log', name: '로그', needLogin: true },
  { path: '/profile', name: '계정', needLogin: true },
  { path: '/login', name: '로그인', needLogin: false },
  { path: '/signup', name: '회원가입', needLogin: false },
  { path: '/logout', name: '로그아웃', needLogin: true },
];

export const Regex = {
  name: /^[가-힣]+$/,
  email:
    /^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]+@[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]+(.[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]+)+$/,
};
