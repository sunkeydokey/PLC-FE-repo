import { useQuery } from '@tanstack/react-query';
import ReactApexChart from 'react-apexcharts';

import { FetchHandler } from '@ui/fetchingHandlers/FetchHandler';

import { requestOperationRecord } from '@/features/dashboard/api';

import type { Data, Graph } from '@/features/dashboard/types';

export const Operation = ({ title, start, end, height }: Graph) => {
  const { data, isLoading, isError } = useQuery(
    ['Operation', `${start}-${end}`],
    () => requestOperationRecord(start, end),
  );

  if (isLoading || isError)
    return (
      <FetchHandler title={title} isLoading={isLoading} isError={isError} />
    );
  return (
    <>
      <h3 className='text-center mt-1 text-stone-200 font-semibold'>{title}</h3>
      <div>
        <ReactApexChart
          type='line'
          height={height}
          options={{
            colors: ['#4ade80', '#7dd3fc', '#fcd34d'],
            stroke: {
              width: 2,
              curve: 'smooth',
            },
            legend: {
              labels: {
                useSeriesColors: true,
              },
            },
            yaxis: {
              labels: {
                style: { colors: '#e7e5e4' },
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
            plotOptions: {
              bar: {
                columnWidth: '10%',
              },
            },
          }}
          series={[
            {
              name: '1호기',
              data: data.map((data: Data) => data.first),
            },
            {
              name: '2호기',
              data: data.map((data: Data) => data.second),
            },
            {
              name: '3호기',
              data: data.map((data: Data) => data.third),
            },
          ]}
        />
      </div>
    </>
  );
};
