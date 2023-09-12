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
  const [action, setAction] = useState<{ [key: string]: number }>({
    No1Action: 0,
    No2InPoint: 0,
    No3Motor2: 0,
    No3Motor1: 0,
  });

  useEffect(() => {
    if (!data) return;
    setAction(data[timeline]);
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
            className='bg-stone-800 w-1/2 h-4/5 rounded-lg p-8 shadow-lg'>
            {isLoading || isError ? (
              isError ? (
                '에러'
              ) : (
                '로딩'
              )
            ) : (
              <>
                <section className='w-full'>
                  <h2 className='text-xl w-full font-bold mb-4 text-stone-200'>{`${TrackId}번 공정 기록`}</h2>
                  <p className='text-stone-200 mb-4'>{action.Datetime}</p>
                  <SlideInput
                    label='타임라인'
                    min={0}
                    max={data.length - 1}
                    step={1}
                    value={timeline}
                    setValue={setTimeline}
                  />
                </section>
                <section className='h-2/3'>
                  <Model
                    scale={0.7}
                    isOnMove={false}
                    platePusher={action.No1Action * 10}
                    dicePusher={action.No2InPoint * 10}
                    peekAngle={(action.No3Motor2 / 18000000) * 65 + 20}
                    peekHeight={(action.No3Motor1 / 1150000) * 15}
                  />
                </section>
                <section className='flex justify-center'>
                  <button
                    onClick={closeModal}
                    className='mt-4 px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600'>
                    닫기
                  </button>
                </section>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
