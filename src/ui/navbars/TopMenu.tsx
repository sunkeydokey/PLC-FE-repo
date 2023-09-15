import { useRecoilValue } from 'recoil';

import { TopNavMenu } from '@ui/menuItems/TopNavMenu';

import { loginState } from '@/features/user/store';
import { KoreanLinkDescription } from '@/utils/config';
import { NavLink } from 'react-router-dom';

export const TopMenu = () => {
  const userState = useRecoilValue(loginState);

  return (
    <div className='flex justify-between py-2 mx-5 items-center'>
      <NavLink to='/' className='font-extrabold text-2xl text-yellow-300/60'>
        Trace
      </NavLink>
      <div className='flex justify-end gap-5'>
        {userState.isLoggedIn && (
          <p className='text-white hidden sm:inline-block'>
            {userState.name}님 안녕하세요!
          </p>
        )}
        <nav className='flex gap-4'>
          {KoreanLinkDescription.filter(
            (link) => link.needLogin === userState.isLoggedIn,
          ).map((link) => (
            <TopNavMenu key={link.name} path={link.path} name={link.name} />
          ))}
        </nav>
      </div>
    </div>
  );
};
