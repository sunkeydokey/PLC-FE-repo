import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { FirstRobot } from '@components/3D-Models/FirstRobot';
import { SecondRobot } from '@components/3D-Models/SecondRobot';
import { ThirdRobot } from '@components/3D-Models/ThirdRobot';
import { Skeleton } from '@components/3D-Models/Skeleton';
import { Slide } from '@components/Slide';
import { useState } from 'react';

export const Machine = () => {
  const [scale, setScale] = useState(0.7);
  const [platePusher, setPlatePusher] = useState(0);
  const [dicePusher, setDicePusher] = useState(0);
  const [peekAngle, setPeekAngle] = useState(20);
  const [peekHeight, setPeekHeight] = useState(0);

  return (
    <div className='mx-auto w-11/12 mt-4 h-full flex'>
      <aside className='basis-1/4 h-full'>
        <Slide
          label={'크기'}
          min={0.5}
          max={0.9}
          step={0.001}
          value={scale}
          setValue={setScale}
        />
        <Slide
          label={'1호기 다리'}
          min={0}
          max={10}
          step={0.1}
          value={platePusher}
          setValue={setPlatePusher}
        />
        <Slide
          label={'2호기 다리'}
          min={0}
          max={8}
          step={1}
          value={dicePusher}
          setValue={setDicePusher}
        />
        <Slide
          label={'집게 각도'}
          min={20}
          max={85}
          step={1}
          value={peekAngle}
          setValue={setPeekAngle}
        />
        <Slide
          label={'3호기 높이'}
          min={3}
          max={15}
          step={0.5}
          value={peekHeight}
          setValue={setPeekHeight}
        />
      </aside>
      <section className='w-full h-full grow'>
        <Canvas>
          <directionalLight position={[1, 1, 1]} />

          <OrbitControls />
          <mesh scale={scale} rotation-x={(30 * Math.PI) / 180}>
            <Skeleton scale={0.1} />
            <FirstRobot scale={0.1} value={platePusher} />
            <SecondRobot scale={0.1} value={dicePusher} />
            <ThirdRobot scale={0.1} angle={-peekAngle} value={peekHeight} />
          </mesh>
        </Canvas>
      </section>
    </div>
  );
};
