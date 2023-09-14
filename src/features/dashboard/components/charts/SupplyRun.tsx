import { useQuery } from '@tanstack/react-query';
import ReactApexChart from 'react-apexcharts';

import { LoadingHandler } from '@/features/dashboard/components/charts/LoadingHandler';

import { requestSupplyRunRatio } from '@/features/dashboard/api';

import type { Data, Graph } from '@/features/dashboard/types';

export const SupplyRun = ({ title, start, end }: Graph) => {
  const { data, isLoading, isError } = useQuery(
    ['SupplyRun', `${start}-${end}`],
    () => requestSupplyRunRatio(start, end),
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
            theme: {
              palette: 'palette6',
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
