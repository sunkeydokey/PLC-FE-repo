import { Link, Outlet } from 'react-router-dom';
import { NavMenu } from './components/NavMenu';
import { useRecoilState } from 'recoil';
import { loginState } from './states/client';

export const Layout = () => {
  const [userState, setUserState] = useRecoilState(loginState);

  const name = localStorage.name;
  const id = localStorage.id;
  if (!userState.isLoggedIn && name && id) {
    setUserState({
      isLoggedIn: true,
      name: name,
      id: id,
    });
  }
  console.log(userState);

  const links = [
    { path: '/dashboard', name: 'DashBoard', needLogin: true },
    { path: '/control', name: 'Control', needLogin: true },
    { path: '/log', name: 'Log', needLogin: true },
    { path: '/profile', name: 'Profile', needLogin: true },
    { path: '/login', name: 'Login', needLogin: false },
    { path: '/signup', name: 'Signup', needLogin: false },
  ];
  return (
    <div className='flex bg-zinc-700 w-screen select-none'>
      <aside className='justify-start min-h-screen hidden sm:flex sm:flex-col w-20'>
        <header className='w-full font-extrabold font-mono text-4xl mx-auto my-2 text-center text-yellow-500'>
          <Link to='/'>3⁺</Link>
        </header>
        <nav className='h-full w-full flex flex-col'>
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
        <Outlet />
      </main>
    </div>
  );
};
