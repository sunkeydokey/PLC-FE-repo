import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroller';

import { TableRow } from '@/features/log/components/TableRow';

import { requestMachineLog } from '@/features/log/api/index';

import { LogColumns } from '@/features/log/types';

export const Table = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetching,
    isError,
    error,
  } = useInfiniteQuery(
    ['log'],
    ({ pageParam = 'http://192.168.0.38:5001/page?num=0' }) =>
      requestMachineLog(pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.next || undefined,
    },
  );

  if (isLoading)
    return (
      <div className='mx-4 border border-stone-800 bg-slate-100 h-full'>
        <TableRow
          values={{
            Datetime: '시간',
            Dicevalue: '감지된 주사위 값',
            No1Action: '1호기 작동여부',
            No2InPoint: '2호기 주사위 준비 여부',
            No3Motor1: '3호기 높이',
            No3Motor2: '3호기 각도',
            Start: '시작여부',
          }}
        />
      </div>
    );
  if (isError) return <div>{error?.toString()}</div>;
  return (
    <>
      <div className='mx-4 border border-stone-800 bg-slate-100'>
        <ul>
          <InfiniteScroll
            pageStart={0}
            loadMore={() => fetchNextPage()}
            hasMore={hasNextPage}>
            <TableRow
              values={{
                Datetime: '시간',
                Dicevalue: '감지된 주사위 값',
                No1Action: '1호기 작동여부',
                No2InPoint: '2호기 주사위 준비 여부',
                No3Motor1: '3호기 높이',
                No3Motor2: '3호기 각도',
                Start: '시작여부',
              }}
            />
            {data?.pages.map((page) => {
              return page.results.map((log: LogColumns) => (
                <TableRow key={`${log.Datetime}.${log.id}`} values={log} />
              ));
            })}
            {isFetching && <div className='text-white'>Loading...</div>}
          </InfiniteScroll>
        </ul>
      </div>
    </>
  );
};
