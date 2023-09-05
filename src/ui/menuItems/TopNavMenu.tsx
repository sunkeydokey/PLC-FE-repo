import { Link, NavLink } from 'react-router-dom';

import { useLogout } from '@/features/user/hooks';

import type { NavProps } from '@ui/types';

export const TopNavMenu = ({ path, name }: NavProps) => {
  const logout = useLogout();
  if (name === '로그아웃')
    return (
      <Link
        to='/'
        className='text-stone-400 font-bold hover:text-stone-300 scale-105'>
        <button onClick={logout}>로그아웃</button>
      </Link>
    );

  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? 'hidden'
          : 'text-stone-400 font-bold hover:text-stone-300 scale-105'
      }
      to={path}>
      {name}
    </NavLink>
  );
};
