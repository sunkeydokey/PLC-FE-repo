import { useQuery } from '@tanstack/react-query';
import ReactApexChart from 'react-apexcharts';

import { LoadingHandler } from '@/features/dashboard/components/charts/LoadingHandler';

import { requestOperationRecord } from '@/features/dashboard/api';

import type { Data, Graph } from '@/features/dashboard/types';

export const Operation = ({ title, start, end }: Graph) => {
  const { data, isLoading, isError } = useQuery(
    ['Operation', `${start}-${end}`],
    () => requestOperationRecord(start, end),
  );
  console.log(data);

  if (isLoading) return <LoadingHandler title={title} isLoading={isLoading} />;
  if (isError) return <span>Error</span>;

  return (
    <>
      <h3 className='text-center mt-1 text-stone-200 font-semibold'>{title}</h3>
      <div>
        <ReactApexChart
          type='line'
          height={'260px'}
          options={{
            stroke: {
              width: 4,
              // colors: [],
            },
            markers: {
              // colors: [],
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
