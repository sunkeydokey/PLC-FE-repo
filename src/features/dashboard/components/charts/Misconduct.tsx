import { useQuery } from '@tanstack/react-query';
import ReactApexChart from 'react-apexcharts';

import { FetchHandler } from '@ui/fetchingHandlers/FetchHandler';

import { requestMisconductRatio } from '@/features/dashboard/api';

import type { Data, Graph } from '@/features/dashboard/types';

export const Misconduct = ({ title, start, end, height }: Graph) => {
  const { data, isLoading, isError } = useQuery(
    ['Misconduct', `${start}-${end}`],
    () => requestMisconductRatio(start, end),
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
            colors: ['#60a5fa', '#ef4444', '#facc15'],
            stroke: {
              width: 4,
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
