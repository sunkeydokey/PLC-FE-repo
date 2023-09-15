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
    <section className='w-[95%] grid grid-cols-3 gap-4 mb-4'>
      <ChartCard>
        <Misconduct
          title='일별 공정 불량률'
          start={start}
          end={end}
          height='260px'
        />
      </ChartCard>
      <ChartCard>
        <Dice title='공정별 생산 용량' start={start} end={end} height='260px' />
      </ChartCard>
      <ChartCard>
        <Malfunction
          title='일별 3호기 신호 불량률'
          start={start}
          end={end}
          height='260px'
        />
      </ChartCard>
      <ChartCard>
        <SupplyRun title='일별 가동률' start={start} end={end} height='260px' />
      </ChartCard>
      <ChartCard>
        <Gas title='오염도' start={start} end={end} height='260px' />
      </ChartCard>
      <ChartCard>
        <Operation title='기기별 가동' start={start} end={end} height='260px' />
      </ChartCard>
    </section>
  );
};
