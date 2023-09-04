import { useState } from 'react';
import { Link } from 'react-router-dom';

import { SVG } from '@components/SVG';

import { useLogout } from '@/utils/hooks';

export const LogoutButton = () => {
  const [isHover, setIsHover] = useState(false);

  const handleLogout = useLogout();

  return (
    <Link to='/'>
      <button
        className='relative hover:bg-cyan-500 border-none w-full h-16 justify-center align-center'
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={handleLogout}>
        <SVG name={'Logout'} />

        <div
          className={`${
            isHover ? '' : 'hidden'
          } h-full w-32 border-none text-left absolute top-0 left-[70px] bg-cyan-500 flex items-center justify-center`}>
          <p className='font-semibold text-white'>Logout</p>
        </div>
      </button>
    </Link>
  );
};

export const BlueButton = ({
  text,
  type,
}: {
  text: string;
  type: 'button' | 'submit' | 'reset' | undefined;
}) => {
  return (
    <button
      type={type}
      className='w-20 bg-sky-400 text-white font-bold rounded-md px-2 py-1 border hover:bg-white hover:text-sky-400 hover:border-sky-400'>
      {text}
    </button>
  );
};
