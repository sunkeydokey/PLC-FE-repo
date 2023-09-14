import { useQuery } from '@tanstack/react-query';
import ReactApexChart from 'react-apexcharts';

import { LoadingHandler } from '@/features/dashboard/components/charts/LoadingHandler';

import { requestGasLog } from '@/features/dashboard/api';

import type { Data, Graph } from '@/features/dashboard/types';

export const Gas = ({ title, start, end }: Graph) => {
  const { data, isLoading, isError } = useQuery(
    ['GasLog', `${start}-${end}`],
    () => requestGasLog(start, end),
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
            colors: ['#fbbf24'],
            width: 2,
          },
          yaxis: {
            labels: {
              style: { colors: ['#e7e5e4'] },
            },
          },
          xaxis: {
            categories: data.map((data: Data) => data.Datetime),
            labels: {
              style: {
                colors: '#e7e5e4',
              },
            },
          },
        }}
        series={[
          {
            name: '오염도',
            data: data.map((data: Data) => data.radiation),
          },
        ]}
      />
    </>
  );
};
