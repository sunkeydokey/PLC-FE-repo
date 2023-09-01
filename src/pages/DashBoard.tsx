import { ChartCard } from '@components/cards/ChartCard';
import LinePlot from '@/service/dashboard/LinePlot';

export const DashBoard = () => {
  return (
    <div className='grow mx-8 mt-6'>
      <section className='mx-auto w-full mt-4 flex flex-wrap'>
        <article className='xs:w-48 sm:w-64 md:w-72 lg:w-96 h-1/4 bg-slate-900 rounded-lg'>
          <ChartCard>
            <LinePlot />
          </ChartCard>
        </article>
      </section>
    </div>
  );
};
