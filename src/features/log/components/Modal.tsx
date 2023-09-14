import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { Model } from '@/features/machine/components/3D-Models';
import { SlideInput } from '@ui/inputs/SlideInput';

import { requestTrackLogDetail } from '@/features/log/api';

export const Modal = ({
  TrackId,
  isVisible,
  setIsVisible,
}: {
  TrackId: number | string;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { data, isLoading, isError } = useQuery(['trackRecord', TrackId], () =>
    requestTrackLogDetail(TrackId),
  );

  const [timeline, setTimeline] = useState(0);
  const [isOkay, setIsOkay] = useState(true);
  const [action, setAction] = useState<{ [key: string]: number }>({
    No1Action: 0,
    No2InPoint: 0,
    No3Motor2: 0,
    No3Motor1: 0,
  });

  useEffect(() => {
    if (!data) return;
    setAction(data.results[timeline]);
    setIsOkay(
      data.dice &&
        data.radiation &&
        data.dice != '규격미달' &&
        data.dice != '규격초과' &&
        data.radiation <= 70,
    );
  }, [data, timeline]);

  const closeModal = () => setIsVisible(false);

  return (
    <>
      {isVisible && (
        <div
          onClick={closeModal}
          className='fixed bg-stone-800/80 inset-0 flex items-center justify-center z-50'>
          <div
            onClick={(event) => event.stopPropagation()}
            className='bg-stone-800 w-1/2 h-4/5 rounded-lg p-8 shadow-lg relative'>
            {isLoading || isError ? (
              isError ? (
                '에러'
              ) : (
                '로딩'
              )
            ) : (
              <>
                <section className='absolute right-0 top-0 z-50 justify-center'>
                  <button
                    onClick={closeModal}
                    className='px-4 py-2 text-white font-extrabold text-2xl'>
                    X
                  </button>
                </section>
                <section className='w-full'>
                  <h2 className='text-xl w-full font-bold mb-4 text-stone-200'>{`${TrackId}번 공정 기록`}</h2>

                  <article className='flex justify-end gap-4'>
                    <div>
                      <span className='text-stone-200 mb-4'>
                        {action.Datetime}
                      </span>
                    </div>
                    <div>
                      <p className='text-stone-200'>
                        용량:{' '}
                        <span
                          className={`${
                            data.dice &&
                            data.dice != '규격미달' &&
                            data.dice != '규격초과'
                              ? 'text-green-500'
                              : 'text-red-500 animate-pulse'
                          } font-bold`}>
                          {data.dice || '신호 불량'}
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className='text-stone-200'>
                        오염도 :{' '}
                        <span
                          className={`${
                            data.radiation && data.radiation <= 70
                              ? 'text-green-500'
                              : 'text-red-500 animate-pulse'
                          } font-bold`}>
                          {data.radiation || '신호 불량'}
                        </span>
                      </p>
                    </div>
                    <div
                      className={`border px-1 rounded ${
                        isOkay
                          ? 'border-green-500'
                          : 'border-red-500 animate-pulse'
                      }`}>
                      <span
                        className={`${
                          isOkay ? 'text-green-500' : 'text-red-500'
                        }`}>
                        {isOkay ? '적합' : '부적합'}
                      </span>
                    </div>
                  </article>

                  <SlideInput
                    label='타임라인'
                    min={0}
                    max={data.results.length - 1}
                    step={1}
                    value={timeline}
                    setValue={setTimeline}
                  />
                </section>
                <section className='h-full'>
                  <Model
                    scale={0.7}
                    isOnMove={false}
                    platePusher={action.No1Action * 10}
                    dicePusher={action.No2InPoint * 10}
                    peekAngle={(action.No3Motor2 / 18000000) * 65 + 20}
                    peekHeight={(action.No3Motor1 / 1150000) * 15}
                  />
                </section>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
