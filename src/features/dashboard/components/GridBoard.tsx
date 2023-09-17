import { useRecoilValue } from 'recoil';

import { ChartCard } from '@/features/dashboard/components/cards/ChartCard';
import { Misconduct } from '@/features/dashboard/components/charts/Misconduct';
import { Malfunction } from '@/features/dashboard/components/charts/Malfunction';
import { SupplyRun } from '@/features/dashboard/components/charts/SupplyRun';
import { Dice } from '@/features/dashboard/components/charts/Dice';
import { Gas } from '@/features/dashboard/components/charts/Gas';
import { Operation } from '@/features/dashboard/components/charts/Operation';

import {
  parsedGlobalEndDate,
  parsedGlobalStartDate,
} from '@/features/dashboard/store';

export const GridBoard = () => {
  const start = useRecoilValue(parsedGlobalStartDate);
  const end = useRecoilValue(parsedGlobalEndDate);

  return (
    <section className='w-11/12 h-full place-content-center grid grid-cols-3 gap-4'>
      <ChartCard title='일별 공정 불량률'>
        <Misconduct start={start} end={end} height='auto' />
      </ChartCard>
      <ChartCard title='공정별 생산 용량'>
        <Dice start={start} end={end} height='auto' />
      </ChartCard>
      <ChartCard title='일별 3호기 신호 불량률'>
        <Malfunction start={start} end={end} height='auto' />
      </ChartCard>
      <ChartCard title='일별 가동률'>
        <SupplyRun start={start} end={end} height='auto' />
      </ChartCard>
      <ChartCard title='오염도'>
        <Gas start={start} end={end} height='auto' />
      </ChartCard>
      <ChartCard title='기기별 가동'>
        <Operation start={start} end={end} height='auto' />
      </ChartCard>
    </section>
  );
};
