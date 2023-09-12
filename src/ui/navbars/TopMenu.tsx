import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { TopNavMenu } from '@ui/menuItems/TopNavMenu';

import { loginState } from '@/features/user/store';
import { KoreanLinkDescription } from '@/utils/config';

export const TopMenu = () => {
  const userState = useRecoilValue(loginState);
  const location = useLocation();
  const pageName =
    location.pathname == '/login' ||
    location.pathname == '/signup' ||
    location.pathname == '/error'
      ? ''
      : location.pathname.slice(1).toUpperCase();

  return (
    <div className='flex justify-between py-4 mx-5 items-center'>
      <h2 className='text-white font-extrabold text-2xl'>{pageName}</h2>
      <div className='flex justify-end gap-5'>
        {userState.isLoggedIn && (
          <p className='text-white hidden sm:inline-block'>
            {userState.name}님 안녕하세요!
          </p>
        )}
        <nav className='flex gap-3'>
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
