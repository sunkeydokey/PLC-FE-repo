import { useNavigate } from 'react-router-dom';

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div
      className={`w-full h-full bg-[url("/background-image/home-bg.jpg")] bg-no-repeat bg-cover object-cover`}>
      <section className='flex flex-col h-full gap-4 justify-start pt-10 items-start pb-20'>
        <p className='w-full text-4xl font-extrabold text-amber-400 px-16'>
          서버와의 통신이 원활하지 않습니다.
        </p>
        <p className='w-full text-6xl font-extrabold text-amber-500 px-16'>
          잠시 후에 다시 시도해주세요.
        </p>
        <div className='flex mt-16 px-16 gap-4'>
          <button
            className='text-2xl font-extrabold border rounded-md text-stone-400 px-4 py-1'
            onClick={() => navigate('/')}>
            홈
          </button>
          <button
            className='text-2xl font-extrabold border rounded-md text-stone-400 px-4 py-1'
            onClick={() => navigate(-1)}>
            뒤로가기
          </button>
        </div>
      </section>
    </div>
  );
};
