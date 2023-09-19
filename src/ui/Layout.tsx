import { Container } from '@ui/container';
import { SideMenu } from '@ui/menulist/SideMenu';
import { TopMenu } from '@ui/menulist/TopMenu';

import type { ReactNode } from 'react';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex relative bg-zinc-700 min-h-screen select-none'>
      <aside className='static justify-start flex flex-col min-w-[64px]'>
        <SideMenu />
      </aside>

      <main className='w-full min-h-full'>
        <Container>
          <TopMenu />
          {children}
        </Container>
      </main>
    </div>
  );
};
