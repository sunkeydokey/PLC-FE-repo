import { useQuery } from '@tanstack/react-query';

import { requestSupplyRunRatio } from '@/features/dashboard/api';

import type { Data, Graph } from '@/features/dashboard/types';
import ReactApexChart from 'react-apexcharts';

export const SupplyRun = ({ title, start, end }: Graph) => {
  const { data, isLoading, isError } = useQuery(
    ['SupplyRun', `${start}-${end}`],
    () => requestSupplyRunRatio(start, end),
  );
  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;
  return (
    <>
      <h3>{title}</h3>
      <div>
        <ReactApexChart
          type='line'
          options={{
            stroke: {
              width: [0, 0, 6],
            },
            legend: {
              labels: {
                useSeriesColors: true,
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
