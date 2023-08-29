import { Link, Outlet } from 'react-router-dom';
import { NavMenu } from './components/NavMenu';

export const Layout = () => {
  const links = [
    { path: '/dashboard', name: 'DashBoard' },
    { path: '/control', name: 'Control' },
    { path: '/log', name: 'Log' },
    { path: '/profile', name: 'Profile' },
  ];
  return (
    <div className='flex bg-stone-800 w-screen min-h-screen select-none'>
      <aside className='flex flex-col justify-start'>
        <header className='font-extrabold font-mono text-6xl text-center text-yellow-500'>
          <Link to='/'>3</Link>
        </header>
        <nav className='h-full flex flex-col'>
          {links.map((link) => (
            <NavMenu key={link.name} path={link.path} name={link.name} />
          ))}
        </nav>
      </aside>
      <main className='flex grow h-full w-full'>
        <Outlet />
      </main>
    </div>
  );
};
