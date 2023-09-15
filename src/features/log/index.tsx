import { useInfiniteQuery } from '@tanstack/react-query';

import { TableHead } from '@/features/log/components/TableHead';
import { TableRow } from '@/features/log/components/TableRow';

import { ExcelDownloadButton } from '@/ui/buttons/ExcelDownloadButton';

import { requestMachineLog } from '@/features/log/api/index';

import { LogColumns } from '@/features/log/types';
import { FetchHandler } from '@ui/fetchingHandlers/FetchHandler';

export const Main = () => {
  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useInfiniteQuery(
      ['log'],
      ({ pageParam = '/page?num=0' }) => requestMachineLog(pageParam),
      {
        getNextPageParam: (lastPage) => lastPage.next || undefined,
      },
    );

  if (isLoading || isError)
    return (
      <FetchHandler
        title='로그 데이터 요청 중'
        isLoading={isLoading}
        isError={isError}
      />
    );

  return (
    <>
      {/* Download Button */}
      <section className='fixed right-0 flex justify-end items-center mt-12 mr-4'>
        <ExcelDownloadButton
          data={data.pages.map((page) =>
            page.results.map((log: LogColumns) => ({
              시간: log.Datetime,
              '트랙 정보': log.TrackId,
              '감지된 주사위 값': log.Dicevalue,
              '1호기 작동여부': log.No1Action,
              '2호기 주사위 준비 여부': log.No2InPoint,
              '3호기 높이': log.No3Motor1,
              '3호기 각도': log.No3Motor2,
              동작여부: log.Start,
            })),
          )}
        />
      </section>
      {/* Data Table */}
      <section className='bg-stone-100 h-full mt-12'>
        <ul>
          <TableHead
            values={{
              Datetime: '시간',
              TrackId: '공정 정보',
              Dicevalue: '감지된 주사위 값',
              No1Action: '1호기 작동여부',
              No2InPoint: '2호기 주사위 준비 여부',
              No3Motor1: '3호기 높이',
              No3Motor2: '3호기 각도',
              Start: '동작여부',
            }}
          />
          {data?.pages.map((page) => {
            return page.results.map((log: LogColumns) => (
              <TableRow key={`${log.Datetime}.${log.id}`} values={log} />
            ));
          })}
        </ul>
        <button
          onClick={() => fetchNextPage()}
          className={`${
            hasNextPage || 'hidden'
          } w-full text-lg font-bold py-4 border-lg border-stone-600`}>
          ...
        </button>
      </section>
    </>
  );
};
