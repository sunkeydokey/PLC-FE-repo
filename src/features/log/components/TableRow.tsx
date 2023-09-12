import { RowBlock } from '@/features/log/components/RowBlock';
import { LogColumns } from '@/features/log/types';

export const TableRow = ({ values }: { values: LogColumns }) => {
  const {
    Datetime,
    Dicevalue,
    No1Action,
    No2InPoint,
    No3Motor1,
    No3Motor2,
    Start,
  } = values;
  return (
    <li className='flex justify-between border hover:border-sky-600'>
      <RowBlock isError={false} value={Datetime} />
      <RowBlock isError={false} value={Dicevalue} />
      <RowBlock isError={false} value={No1Action} />
      <RowBlock isError={false} value={No2InPoint} />
      <RowBlock
        isError={
          typeof No3Motor1 == 'number' &&
          ((Number(No3Motor1) / 1150000) * 15 > 15 ||
            (Number(No3Motor1) / 1150000) * 15 < 0)
        }
        value={
          typeof No3Motor1 == 'string'
            ? No3Motor1
            : ((Number(No3Motor1) / 1150000) * 15).toFixed(4)
        }
      />
      <RowBlock
        isError={
          typeof No3Motor2 == 'number' &&
          ((Number(No3Motor2) / 18000000) * 65 > 65 ||
            (Number(No3Motor2) / 18000000) * 65 < 0)
        }
        value={
          typeof No3Motor2 == 'string'
            ? No3Motor2
            : ((Number(No3Motor2) / 18000000) * 65).toFixed(4)
        }
      />
      <RowBlock isError={false} value={Start} />
    </li>
  );
};
