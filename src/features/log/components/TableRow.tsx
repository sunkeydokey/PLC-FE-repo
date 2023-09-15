import { useState } from 'react';

import { Modal } from '@/features/log/components/Modal';
import { Cell } from '@/features/log/components/Cell';

import { LogColumns } from '@/features/log/types';

export const TableRow = ({ values }: { values: LogColumns }) => {
  const {
    Datetime,
    TrackId,
    Dicevalue,
    No1Action,
    No2InPoint,
    No3Motor1,
    No3Motor2,
    Start,
  } = values;

  const [isVisible, setIsVisible] = useState(false);

  const openModal = (event: React.MouseEvent<HTMLLIElement>) => {
    event.stopPropagation();
    if (!TrackId) return;
    setIsVisible(true);
  };

  return (
    <>
      {!!TrackId && (
        <Modal
          TrackId={TrackId}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
      )}
      <li
        onClick={openModal}
        className={`grid grid-cols-8 border ${
          !!TrackId && 'hover:bg-sky-200/60'
        }`}>
        <Cell isError={false} value={Datetime} />
        <Cell isError={!TrackId} value={TrackId} />
        <Cell isError={false} value={Dicevalue} />
        <Cell isError={false} value={No1Action} />
        <Cell isError={false} value={No2InPoint} />
        <Cell
          isError={
            (No3Motor1 / 1150000) * 15 > 15 || (No3Motor1 / 1150000) * 15 < 0
          }
          value={((No3Motor1 / 1150000) * 15).toFixed(4)}
        />
        <Cell
          isError={
            (No3Motor2 / 18000000) * 65 > 65 || (No3Motor2 / 18000000) * 65 < 0
          }
          value={((No3Motor2 / 18000000) * 65).toFixed(4)}
        />
        <Cell isError={false} value={Start} />
      </li>
    </>
  );
};
