import { Link } from 'react-router-dom';

export const UserInfo = ({
  name,
  email,
}: {
  name: string | undefined;
  email: string | undefined;
}) => {
  return (
    <div className='flex justify-between w-full items-center rounded-full bg-slate-600'>
      <div className='rounded-full ring-sky-200 ring-2 bg-pink-500/80 text-center w-16 h-16 flex justify-items-center'>
        <p className='mx-auto my-auto text-stone-200 font-bold text-xl'>
          {name && name[0]}
        </p>
      </div>
      <p className='mx-auto my-auto text-stone-200 font-bold'>{email}</p>
      <Link to='/mypage/edit'>
        <button className='mx-8 px-4 rounded-md py-1 bg-cyan-600 border-2 border-stone-200 text-stone-200 hover:bg-slate-300 hover:text-stone-600'>
          수정
        </button>
      </Link>
    </div>
  );
};
