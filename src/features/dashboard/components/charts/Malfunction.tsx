import { useQuery } from '@tanstack/react-query';

import { requestMalfunctiontRatio } from '@/features/dashboard/api';

import type { Data, Graph } from '@/features/dashboard/types';
import ReactApexChart from 'react-apexcharts';

export const Malfunction = ({ title, start, end }: Graph) => {
  const { data, isLoading, isError } = useQuery(
    ['Malfunction', `${start}-${end}`],
    () => requestMalfunctiontRatio(start, end),
  );
  if (isError) return <div>Error</div>;
  if (isLoading) return <div>Loading</div>;
  return (
    <>
      <h3>{title}</h3>
      <div>
        <ReactApexChart
          type='bar'
          options={{
            legend: {
              labels: {
                useSeriesColors: true,
              },
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
              name: '정상 신호',
              type: 'column',
              data: data.map((data: Data) => data.normal),
            },
            {
              name: '불량 신호',
              type: 'column',
              data: data.map((data: Data) => data.defect),
            },
          ]}
        />
      </div>
    </>
  );
};
