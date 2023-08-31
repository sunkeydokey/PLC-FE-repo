import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { SVG } from './SVG';

import type { NavProps } from '../types/types';

export const NavMenu = ({ path, name, needLogin }: NavProps) => {
  needLogin;
  const BASE =
    'relative block border-none w-full h-16 flex justify-center align-center';
  const NOTACTIVE = `${BASE} hover:bg-cyan-500`;
  const ACTIVE = `${BASE} bg-cyan-600`;

  const [isHover, setIsHover] = useState(false);

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
        } h-full w-32 z-10 border-none text-left absolute top-0 left-[76px] bg-cyan-500 flex items-center justify-center`}>
        <p className='font-semibold text-white'>{name.toUpperCase()}</p>
      </div>
    </NavLink>
  );
};
