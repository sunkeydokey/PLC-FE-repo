import { ChartCard } from '@/features/dashboard/components/cards/ChartCard';
import { Wrapper } from '@ui/wrapper';

import { Misconduct } from '@/features/dashboard/components/charts/Misconduct';
import { Malfunction } from '@/features/dashboard/components/charts/Malfunction';
import { SupplyRun } from '@/features/dashboard/components/charts/SupplyRun';
import { Dice } from '@/features/dashboard/components/charts/Dice';
import { Gas } from '@/features/dashboard/components/charts/Gas';
import { Datepicker } from '@/features/dashboard/components/Datepicker';

export const Main = () => {
  return (
    <Wrapper>
      <section className='w-full mx-auto'>
        <Datepicker />
      </section>
      <section className='mx-4 grid grid-cols-3 gap-4'>
        <ChartCard>
          <Misconduct
            title='일별 공정 불량률'
            start={'2023-09-13'}
            end={'2023-09-13'}
          />
        </ChartCard>
        <ChartCard>
          <Malfunction
            title='일별 3호기 신호 불량률'
            start={'2023-09-13'}
            end={'2023-09-13'}
          />
        </ChartCard>
        <ChartCard>
          <Dice
            title='공정별 생산 용량'
            start={'2023-09-13'}
            end={'2023-09-13'}
          />
        </ChartCard>
        <ChartCard>
          <SupplyRun
            title='일별 가동률'
            start={'2023-09-13'}
            end={'2023-09-13'}
          />
        </ChartCard>
        <ChartCard>
          <Gas title='test' start={'2023-09-13'} end={'2023-09-13'} />
        </ChartCard>
        <ChartCard>
          <Misconduct title='test' start={'2023-09-13'} end={'2023-09-13'} />
        </ChartCard>
      </section>
    </Wrapper>
  );
};
