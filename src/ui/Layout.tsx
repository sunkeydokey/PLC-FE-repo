import { Link, Outlet } from 'react-router-dom';

import { Container } from '@ui/container';
import { LayoutNavMenu } from '@ui/menuItems/LayoutNavMenu';
import { TopMenu } from '@ui/navbars/TopMenu';

import { useUserLoggedIn } from '@/features/user/hooks';

import { links } from '@/utils/config';

export const Layout = ({ needLogin }: { needLogin: boolean }) => {
  const userState = useUserLoggedIn(needLogin);

  return (
    <div className='flex relative bg-zinc-700 min-h-screen select-none'>
      <aside className='static justify-start flex flex-col min-w-[74px]'>
        <div className='fixed z-50 w-[74px]'>
          <header className='font-extrabold font-mono text-4xl my-2 text-center text-yellow-500'>
            <Link to='/'>3⁺</Link>
          </header>
          <nav className='w-full flex flex-col'>
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
        </div>
      </aside>

      <main className='w-full min-h-full'>
        <Container>
          <TopMenu />
          <Outlet />
        </Container>
      </main>
    </div>
  );
};
