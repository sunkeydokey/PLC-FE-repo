import { Outlet } from 'react-router-dom';

import { Container } from '@ui/container';
import { SideMenu } from '@ui/menulist/SideMenu';
import { TopMenu } from '@ui/menulist/TopMenu';
import { useUserLoggedIn } from '@/features/user/hooks';

export const Layout = ({ needLogin }: { needLogin: boolean }) => {
  useUserLoggedIn(needLogin);

  return (
    <div className='flex relative bg-zinc-700 min-h-screen select-none'>
      <aside className='static justify-start flex flex-col min-w-[64px]'>
        <SideMenu needLogin={needLogin} />
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
