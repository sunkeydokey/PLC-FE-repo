import { useQuery } from '@tanstack/react-query';
import ReactApexChart from 'react-apexcharts';

import { LoadingHandler } from '@/features/dashboard/components/charts/LoadingHandler';

import { requestMisconductRatio } from '@/features/dashboard/api';

import type { Data, Graph } from '@/features/dashboard/types';

export const Misconduct = ({ title, start, end }: Graph) => {
  const { data, isLoading, isError } = useQuery(
    ['Misconduct', `${start}-${end}`],
    () => requestMisconductRatio(start, end),
  );

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
              width: [0, 0, 2],
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
              name: '정상',
              type: 'column',
              data: data.map((data: Data) => data.normal),
            },
            {
              name: '불량',
              type: 'column',
              data: data.map((data: Data) => data.defect),
            },
            {
              name: '총량',
              type: 'line',
              data: data.map(
                (data: Data) =>
                  (data.normal as number) + (data.defect as number),
              ),
            },
          ]}
        />
      </div>
    </>
  );
};
