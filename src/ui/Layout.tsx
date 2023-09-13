import { Link, Outlet } from 'react-router-dom';

import { Container } from '@ui/container';
import { LayoutNavMenu } from '@ui/menuItems/LayoutNavMenu';
import { TopMenu } from '@ui/navbars/TopMenu';

import { useUserLoggedIn } from '@/features/user/hooks';

import { links } from '@/utils/config';
import { Wrapper } from '@ui/wrapper';

export const Layout = ({ needLogin }: { needLogin: boolean }) => {
  const userState = useUserLoggedIn(needLogin);

  return (
    <div className='flex relative bg-zinc-700 w-screen min-h-screen select-none'>
      <aside className='static justify-start flex flex-col w-[74px]'>
        <div className='fixed z-50'>
          <header className='w-[70px] font-extrabold font-mono text-4xl my-2 text-center text-yellow-500'>
            <Link to='/'>3⁺</Link>
          </header>
          <nav className='h-full flex flex-col'>
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

      <main className='flex w-full'>
        <Container>
          <TopMenu />
          <Wrapper>
            <Outlet />
          </Wrapper>
        </Container>
      </main>
    </div>
  );
};
