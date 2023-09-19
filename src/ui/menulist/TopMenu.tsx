import { NavLink } from 'react-router-dom';

import { TopNavMenu } from '@ui/menuItems/TopNavMenu';

import { KoreanLinkDescription } from '@/utils/config';
import { useUser } from '@/features/user/hooks/useUser';

export const TopMenu = () => {
  const user = useUser();

  return (
    <div className='flex justify-between py-3 mx-5 items-center'>
      <NavLink to='/' className='font-extrabold text-2xl text-yellow-300/60'>
        Trace
      </NavLink>
      <div className='flex justify-end gap-5'>
        {user && (
          <p className='text-white hidden sm:inline-block'>
            {user.name}님 안녕하세요!
          </p>
        )}
        <nav className='flex gap-4'>
          {user
            ? KoreanLinkDescription.filter(
                (link) => link.needLogin === true,
              ).map((link) => (
                <TopNavMenu key={link.name} path={link.path} name={link.name} />
              ))
            : KoreanLinkDescription.filter(
                (link) => link.needLogin === false,
              ).map((link) => (
                <TopNavMenu key={link.name} path={link.path} name={link.name} />
              ))}
        </nav>
      </div>
    </div>
  );
};
