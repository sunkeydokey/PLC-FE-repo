import { Link, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { NavMenu } from '@components/NavMenu';
import { Container } from '@components/Container';
import { TopMenu } from '@components/TopMenu';

import { loginState } from '@/states/client';

import { useUserLoggedIn } from '@/utils/hooks';
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
              <NavMenu
                key={link.name}
                path={link.path}
                name={link.name}
                needLogin={link.needLogin}
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
