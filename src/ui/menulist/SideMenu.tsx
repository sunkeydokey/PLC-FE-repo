import { LayoutNavMenu } from '@ui/menuItems/LayoutNavMenu';

import { links } from '@/utils/config';

import { useUserLoggedIn } from '@/features/user/hooks';

export const SideMenu = ({ needLogin }: { needLogin: boolean }) => {
  const userState = useUserLoggedIn(needLogin);

  return (
    <div className='fixed z-50 w-[64px] mt-20'>
      <nav className='w-full flex flex-col'>
        {links
          .filter((link) => link.needLogin === userState.isLoggedIn)
          .map((link) => (
            <LayoutNavMenu key={link.name} path={link.path} name={link.name} />
          ))}
      </nav>
    </div>
  );
};
