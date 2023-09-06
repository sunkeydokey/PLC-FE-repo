import { Link, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { Container } from '@ui/container';
import { LayoutNavMenu } from '@ui/menuItems/LayoutNavMenu';
import { TopMenu } from '@ui/navbars/TopMenu';

import { loginState } from '@/features/user/store';
import { useUserLoggedIn } from '@/features/user/hooks';

import { links } from '@/utils/config';

export const Layout = () => {
  const userState = useRecoilValue(loginState);

  useUserLoggedIn();

  return (
    <div className='flex bg-zinc-700 w-screen select-none'>
      <aside className='justify-start min-h-screen hidden sm:flex sm:flex-col w-[70px]'>
        <header className='w-[70px] font-extrabold font-mono text-4xl mx-auto my-2 text-center text-yellow-500'>
          <Link to='/'>3⁺</Link>
        </header>
        <nav className='h-full w-[70px] flex flex-col'>
          {links
            .filter((link) => link.needLogin === userState.isLoggedIn)
            .map((link) => (
              <LayoutNavMenu
                key={link.name}
                path={link.path}
                name={link.name}
              />
            ))}
        </nav>
      </aside>
      <main className='flex grow h-full w-full'>
        <Container>
          <TopMenu />
          <Outlet />
        </Container>
      </main>
    </div>
  );
};
