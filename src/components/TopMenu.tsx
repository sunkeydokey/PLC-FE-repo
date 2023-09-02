import { Link, NavLink, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { loginState } from '@/states/client';
import { useLogout } from '@/utils/hooks';

export const TopMenu = () => {
  const userState = useRecoilValue(loginState);
  const location = useLocation();
  const pageName =
    location.pathname == '/login' ||
    location.pathname == '/signup' ||
    location.pathname == '/error'
      ? ''
      : location.pathname.slice(1).toUpperCase();

  const handleLogout = useLogout();
  return (
    <div className='flex justify-between mt-4 mx-5'>
      <h2 className='text-white font-extrabold text-2xl'>{pageName}</h2>
      <div className='flex justify-end gap-5'>
        {userState.isLoggedIn && (
          <p className='text-white'>{userState.name}님 안녕하세요!</p>
        )}
        {userState.isLoggedIn ? (
          <section className='flex justify-around gap-5 text-gray-500'>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'hidden' : 'hover:text-white scale-105'
              }
              to={'/dashboard'}>
              대시보드
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'hidden' : 'hover:text-white scale-105'
              }
              to={'/control'}>
              PLC제어
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'hidden' : 'hover:text-white scale-105'
              }
              to={'/log'}>
              로그
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'hidden' : 'hover:text-white scale-105'
              }
              to={'/profile'}>
              계정
            </NavLink>
            <Link to='/' className='hover:text-white scale-105'>
              <button onClick={handleLogout}>로그아웃</button>
            </Link>
          </section>
        ) : (
          <section className='flex justify-around gap-5 text-gray-500'>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'hidden' : 'hover:text-white scale-105'
              }
              to={'/login'}>
              로그인
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'hidden' : 'hover:text-white scale-105'
              }
              to={'/signup'}>
              회원가입
            </NavLink>
          </section>
        )}
      </div>
    </div>
  );
};
