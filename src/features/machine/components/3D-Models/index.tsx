import { Canvas } from '@react-three/fiber';

import { FirstRobot } from '@/features/machine/components/3D-Models/FirstRobot';
import { SecondRobot } from '@/features/machine/components/3D-Models/SecondRobot';
import { ThirdRobot } from '@/features/machine/components/3D-Models/ThirdRobot';
import { Skeleton } from '@/features/machine/components/3D-Models/Skeleton';
import { Belt } from '@/features/machine/components/3D-Models/Belt';
import { ColorSensor } from '@/features/machine/components/3D-Models/ColorSensor';
import { VisionSensor } from '@/features/machine/components/3D-Models/VisionSensor';
import { TrafficLight } from '@/features/machine/components/3D-Models/TrafficLight';
import { OrbitControls } from '@react-three/drei';

import type { MachineWithBelt } from '@/features/machine/types';

export const Model = ({
  scale,
  isOnMove,
  platePusher,
  dicePusher,
  peekAngle,
  peekHeight,
}: MachineWithBelt) => {
  return (
    <Canvas>
      <directionalLight position={[1, 1, 1]} />

      <OrbitControls />
      <mesh position-x={-0.5} scale={scale} rotation-x={(30 * Math.PI) / 180}>
        <Skeleton />
        <Belt isOnMove={isOnMove} />
        <FirstRobot value={platePusher} />
        <SecondRobot value={dicePusher} />
        <ThirdRobot peekAngle={-peekAngle} peekHeight={peekHeight} />
        <ColorSensor />
        <VisionSensor />
        <TrafficLight />
      </mesh>
    </Canvas>
  );
};
