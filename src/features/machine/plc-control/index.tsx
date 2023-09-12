import { useState } from 'react';

import { Connector } from '@/features/machine/components/Connector';

import { Model } from '@/features/machine/components/3D-Models';

import { SlideInput } from '@ui/inputs/SlideInput';

export const Main = () => {
  const [scale, setScale] = useState(0.7);
  const [isOnMove, setIsOnMove] = useState(false);
  const [platePusher, setPlatePusher] = useState(0);
  const [dicePusher, setDicePusher] = useState(0);
  const [peekAngle, setPeekAngle] = useState(20);
  const [peekHeight, setPeekHeight] = useState(0);

  return (
    <div className='w-full h-full flex'>
      <aside className='mx-4 w-80 h-full flex flex-col justify-start'>
        <Connector
          isOnMove={isOnMove}
          setIsOnMove={setIsOnMove}
          setPlatePusher={setPlatePusher}
          setDicePusher={setDicePusher}
          setPeekAngle={setPeekAngle}
          setPeekHeight={setPeekHeight}
        />
        <SlideInput
          label={'크기'}
          min={0.5}
          max={0.9}
          step={0.001}
          value={scale}
          setValue={setScale}
        />
        <SlideInput
          label={'1호기 다리'}
          min={0}
          max={10}
          step={0.1}
          value={platePusher}
          setValue={setPlatePusher}
        />
        <SlideInput
          label={'2호기 다리'}
          min={0}
          max={10}
          step={1}
          value={dicePusher}
          setValue={setDicePusher}
        />
        <SlideInput
          label={'집게 각도'}
          min={20}
          max={85}
          step={1}
          value={peekAngle}
          setValue={setPeekAngle}
        />
        <SlideInput
          label={'3호기 높이'}
          min={0}
          max={15}
          step={0.5}
          value={peekHeight}
          setValue={setPeekHeight}
        />
      </aside>
      <section className='h-full grow'>
        <Model
          scale={scale}
          isOnMove={isOnMove}
          platePusher={platePusher}
          dicePusher={dicePusher}
          peekAngle={peekAngle}
          peekHeight={peekHeight}
        />
      </section>
    </div>
  );
};
