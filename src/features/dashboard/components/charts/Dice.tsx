import { useQuery } from '@tanstack/react-query';
import ReactApexChart from 'react-apexcharts';

import { FetchHandler } from '@ui/fetchingHandlers/FetchHandler';

import { requestDiceLog } from '@/features/dashboard/api';

import type { Data, Graph } from '@/features/dashboard/types';

export const Dice = ({ start, end, height }: Graph) => {
  const { data, isLoading, isError } = useQuery(
    ['DiceLog', `${start}-${end}`],
    () => requestDiceLog(start, end),
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
        annotations: {
          yaxis: [
            {
              y: 1.9,
              y2: 5.1,
              borderColor: '#00E396',
              fillColor: '#99f6e4',
              label: {
                borderColor: '#292524',
                borderRadius: 8,
                offsetY: 30,
                style: {
                  color: '#292524',
                  background: '#99f6e4',
                  fontSize: '12px',
                  padding: { top: 4, bottom: 4, left: 4, right: 4 },
                },
                text: '정상규격',
              },
            },
          ],
        },
        stroke: {
          curve: 'smooth',
          colors: ['#38bdf8'],
          width: 2,
        },
        yaxis: {
          labels: {
            style: { colors: ['white'] },
          },
        },
        xaxis: {
          categories: data.map((data: Data) => data.TrackId),
          labels: {
            show: false,
          },
        },
      }}
      series={[
        {
          name: '용량',
          data: data.map((data: Data) => data.dice),
        },
      ]}
    />
  );
};
