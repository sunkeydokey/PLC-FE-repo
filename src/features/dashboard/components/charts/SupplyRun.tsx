import { useQuery } from '@tanstack/react-query';
import ReactApexChart from 'react-apexcharts';

import { FetchHandler } from '@ui/fetchingHandlers/FetchHandler';

import { requestSupplyRunRatio } from '@/features/dashboard/api';

import type { Data, Graph } from '@/features/dashboard/types';

export const SupplyRun = ({ title, start, end, height }: Graph) => {
  const { data, isLoading, isError } = useQuery(
    ['SupplyRun', `${start}-${end}`],
    () => requestSupplyRunRatio(start, end),
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
            stroke: {
              width: 2,
            },
            colors: ['#4ade80', '#fb923c', '#22d3ee'],
            legend: {
              labels: {
                colors: '#e7e5e4',
              },
            },
            yaxis: {
              labels: {
                style: {
                  colors: '#e7e5e4',
                },
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
                columnWidth: '30%',
              },
            },
          }}
          series={[
            {
              name: '가동',
              type: 'column',
              data: data.map((data: Data) => data.normal),
            },
            {
              name: '미가동',
              type: 'column',
              data: data.map((data: Data) => data.defect),
            },
            {
              name: 'Total',
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
