import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { FirstRobot } from '@components/3D-Models/FirstRobot';
import { SecondRobot } from '@components/3D-Models/SecondRobot';
import { ThirdRobot } from '@components/3D-Models/ThirdRobot';

export const Machine = () => {
  return (
    <Canvas resize={{ debounce: { scroll: 0, resize: 0.1 } }}>
      <directionalLight position={[1, 1, 1]} />

      <OrbitControls />

      <axesHelper scale={[100, 100, 100]} />

      <mesh
        rotation-y={(180 * Math.PI) / 180}
        rotation-x={(90 * Math.PI) / 180}>
        <FirstRobot />
      </mesh>

      <mesh
        position-x={10}
        rotation-y={(180 * Math.PI) / 180}
        rotation-x={(90 * Math.PI) / 180}>
        <SecondRobot />
      </mesh>

      <mesh
        position-x={25}
        rotation-x={(90 * Math.PI) / 180}
        rotation-y={(180 * Math.PI) / 180}
        rotation-z={(10 * Math.PI) / 180}>
        <ThirdRobot />
      </mesh>
    </Canvas>
  );
};
