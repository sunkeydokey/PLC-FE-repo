import { useQuery } from '@tanstack/react-query';
import ReactApexChart from 'react-apexcharts';

import { FetchHandler } from '@ui/fetchingHandlers/FetchHandler';

import { requestMalfunctiontRatio } from '@/features/dashboard/api';

import type { Data, Graph } from '@/features/dashboard/types';

export const Malfunction = ({ title, start, end, height }: Graph) => {
  const { data, isLoading, isError } = useQuery(
    ['Malfunction', `${start}-${end}`],
    () => requestMalfunctiontRatio(start, end),
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
          type='bar'
          height={height}
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
