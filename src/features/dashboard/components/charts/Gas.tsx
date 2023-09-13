import { useQuery } from '@tanstack/react-query';

import { requestGasLog } from '@/features/dashboard/api';

import type { Data, Graph } from '@/features/dashboard/types';
import ReactApexChart from 'react-apexcharts';

export const Gas = ({ title, start, end }: Graph) => {
  const { data, isLoading, isError } = useQuery(
    ['GasLog', `${start}-${end}`],
    () => requestGasLog(start, end),
  );
  if (isError) return <div>Error</div>;
  if (isLoading) return <div>Loading</div>;
  return (
    <>
      <h3>{title}</h3>
      <ReactApexChart
        type='line'
        height={'auto'}
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
