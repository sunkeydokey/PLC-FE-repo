import { NavLink } from 'react-router-dom';
import { SVG } from './SVG';

export const NavMenu = ({ path, name }: { path: string; name: string }) => {
  const BASE =
    'block border-none overflow-hidden w-16 h-16 flex justify-center align-center';
  const NOTACTIVE = `${BASE} hover:bg-orange-300`;
  const ACTIVE = `${BASE} bg-orange-500`;

  return (
    <NavLink
      to={path}
      className={({ isActive }: { isActive: boolean }) =>
        isActive ? ACTIVE : NOTACTIVE
      }>
      <SVG name={name} />
    </NavLink>
  );
};
