import { useUser } from '@/features/user/hooks/useUser';

export const Home = () => {
  useUser();
  return (
    <div
      className={`w-full h-full bg-[url("/background-image/home-bg.jpg")] bg-no-repeat bg-cover object-cover`}>
      <section className='flex flex-col h-full gap-4 justify-end items-end pb-20'>
        <p className='w-full text-4xl font-extrabold text-amber-400 px-16'>
          Trace Process,
        </p>
        <p className='w-full text-6xl font-extrabold text-amber-500 px-16'>
          Non-break Track
        </p>
      </section>
    </div>
  );
};
