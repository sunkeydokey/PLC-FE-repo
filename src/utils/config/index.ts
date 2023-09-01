export const links = [
  { path: '/dashboard', name: 'DashBoard', needLogin: true },
  { path: '/control', name: 'Control', needLogin: true },
  { path: '/log', name: 'Log', needLogin: true },
  { path: '/profile', name: 'Profile', needLogin: true },
  { path: '/login', name: 'Login', needLogin: false },
  { path: '/signup', name: 'Signup', needLogin: false },
  { path: '/logout', name: 'Logout', needLogin: true },
];

export const Regex = {
  name: /^[가-힣]+$/,
  email:
    /^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]+@[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]+(.[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]+)+$/,
};
