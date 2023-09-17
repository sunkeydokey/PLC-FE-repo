import { useQuery } from '@tanstack/react-query';
import ReactApexChart from 'react-apexcharts';

import { FetchHandler } from '@ui/fetchingHandlers/FetchHandler';

import { requestGasLog } from '@/features/dashboard/api';

import type { Data, Graph } from '@/features/dashboard/types';

export const Gas = ({ start, end, height }: Graph) => {
  const { data, isLoading, isError } = useQuery(
    ['GasLog', `${start}-${end}`],
    () => requestGasLog(start, end),
  );

  if (isLoading || isError)
    return <FetchHandler isLoading={isLoading} isError={isError} />;

  return (
    <ReactApexChart
      type='line'
      height={height}
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
          categories: data.map(
            (data: Data) =>
              data.Datetime.split(' ')[0].split('/')[1] +
              '월' +
              data.Datetime.split(' ')[0].split('/')[2] +
              '일',
          ),

          labels: {
            show: false,
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
  );
};
