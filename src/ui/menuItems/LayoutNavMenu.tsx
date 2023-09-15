import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { SVG } from '@ui/SVG';

import { useLogout } from '@/features/user/hooks';

import type { NavProps } from '@ui/types';

export const LayoutNavMenu = ({ path, name }: NavProps) => {
  const BASE =
    'relative border-none w-full h-16 flex justify-center align-center';
  const NOTACTIVE = `${BASE} hover:bg-cyan-500`;
  const ACTIVE = `${BASE} bg-cyan-600`;

  const [isHover, setIsHover] = useState(false);
  const logout = useLogout();

  if (name == 'Logout')
    return (
      <button
        className={NOTACTIVE}
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={logout}>
        <SVG name={name} />
        <div
          className={`${
            isHover ? '' : 'hidden'
          } h-full w-32 border-none text-left absolute top-0 left-[64px] bg-cyan-500 flex items-center justify-center`}>
          <p className='font-semibold text-white'>로그아웃</p>
        </div>
      </button>
    );

  return (
    <NavLink
      to={path}
      className={({ isActive }: { isActive: boolean }) =>
        isActive ? ACTIVE : NOTACTIVE
      }
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>
      <SVG name={name} />
      <div
        className={`${
          isHover ? '' : 'hidden'
        } h-full w-32 border-none text-left absolute top-0 left-[64px] bg-cyan-500 flex items-center justify-center`}>
        <p className='font-semibold text-white'>{name.toUpperCase()}</p>
      </div>
    </NavLink>
  );
};
