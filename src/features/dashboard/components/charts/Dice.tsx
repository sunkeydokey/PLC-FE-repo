import { useQuery } from '@tanstack/react-query';

import { LoadingHandler } from '@/features/dashboard/components/charts/LoadingHandler';

import { requestDiceLog } from '@/features/dashboard/api';

import type { Data, Graph } from '@/features/dashboard/types';
import ReactApexChart from 'react-apexcharts';

export const Dice = ({ title, start, end }: Graph) => {
  const { data, isLoading, isError } = useQuery(
    ['DiceLog', `${start}-${end}`],
    () => requestDiceLog(start, end),
  );

  if (isLoading) return <LoadingHandler title={title} isLoading={isLoading} />;
  if (isError) return <span>Error</span>;

  return (
    <>
      <h3 className='text-center mt-1 text-stone-200 font-semibold'>{title}</h3>
      <ReactApexChart
        type='line'
        height={'260px'}
        options={{
          legend: {
            labels: {
              useSeriesColors: true,
            },
          },
          stroke: {
            curve: 'smooth',
            colors: ['#38bdf8'],
            width: 2,
          },
          yaxis: {
            labels: {
              style: { colors: ['#e7e5e4'] },
            },
          },
          xaxis: {
            categories: data.map((data: Data) => data.TrackId),
            labels: {
              style: {
                colors: '#e7e5e4',
              },
            },
          },
        }}
        series={[
          {
            name: '용량',
            data: data.map((data: Data) => data.dice),
          },
        ]}
      />
    </>
  );
};
