import { ChartCard } from '../components/ChartCard';
import { Container } from '../components/Container';
import LinePlot from '../components/plots/LinePlot';

export const DashBoard = () => {
  return (
    <Container>
      <h2 className='text-white text-4xl font-extrabold my-2'>Dashboard</h2>
      <div className='grow'>
        <section className='mx-auto w-full h-full mt-4 flex flex-wrap'>
          <article className='xs:w-48 sm:w-64 md:w-72 lg:w-96 h-1/4 bg-slate-900 rounded-lg'>
            <ChartCard>
              <LinePlot />
            </ChartCard>
          </article>
        </section>
      </div>
    </Container>
  );
};
