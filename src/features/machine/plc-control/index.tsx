import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
// import { Bar } from 'react-chartjs-2';

import { FirstRobot } from '@/features/machine/components/3D-Models/FirstRobot';
import { SecondRobot } from '@/features/machine/components/3D-Models/SecondRobot';
import { ThirdRobot } from '@/features/machine/components/3D-Models/ThirdRobot';
import { Skeleton } from '@/features/machine/components/3D-Models/Skeleton';
import { MQTTConnector } from '@/features/machine/components/MQTTConnector';
import { SlideInput } from '@ui/inputs/SlideInput';
import { Belt } from '../components/3D-Models/Belt';
// import { ChartCard } from '@ui/cards/ChartCard';

export const Machine = () => {
  const [scale, setScale] = useState(0.7);
  const [isOnMove, setIsOnMove] = useState(false);
  const [platePusher, setPlatePusher] = useState(0);
  const [dicePusher, setDicePusher] = useState(0);
  const [peekAngle, setPeekAngle] = useState(20);
  const [peekHeight, setPeekHeight] = useState(0);

  return (
    <div className='mx-auto w-11/12 mt-4 h-full flex'>
      <aside className='basis-1/4 h-full'>
        <MQTTConnector
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
        {/* <ChartCard>
          <Bar
            data={{
              datasets: [
                {
                  data: [20, 10],
                },
              ],
              labels: ['a', 'b'],
            }}
          />
        </ChartCard> */}
      </aside>
      <section className='w-full h-full grow'>
        <Canvas>
          <directionalLight position={[1, 1, 1]} />

          <OrbitControls />
          <mesh scale={scale} rotation-x={(30 * Math.PI) / 180}>
            <Skeleton scale={0.1} />
            <Belt isOnMove={isOnMove} scale={[10.2, 9, 9]} />
            <FirstRobot scale={0.1} value={platePusher} />
            <SecondRobot scale={0.1} value={dicePusher} />
            <ThirdRobot scale={0.1} angle={-peekAngle} value={peekHeight} />
          </mesh>
        </Canvas>
      </section>
    </div>
  );
};
