import { LayoutNavMenu } from '@ui/menuItems/LayoutNavMenu';

import { links } from '@/utils/config';

import { useUser } from '@/features/user/hooks/useUser';

export const SideMenu = () => {
  const user = useUser();
  return (
    <div className='fixed z-50 w-[64px] mt-16'>
      <nav className='w-full flex flex-col'>
        {user
          ? links
              .filter((link) => link.needLogin === true)
              .map((link) => (
                <LayoutNavMenu
                  key={link.name}
                  path={link.path}
                  name={link.name}
                />
              ))
          : links
              .filter((link) => link.needLogin !== true)
              .map((link) => (
                <LayoutNavMenu
                  key={link.name}
                  path={link.path}
                  name={link.name}
                />
              ))}
      </nav>
    </div>
  );
};
