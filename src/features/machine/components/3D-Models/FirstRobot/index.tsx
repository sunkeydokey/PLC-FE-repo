import { Body } from '@/features/machine/components/3D-Models/FirstRobot/model/Body';
import { Pusher } from '@/features/machine/components/3D-Models/FirstRobot/model/Pusher';

import type { MachineParts } from '@/features/machine/types';

export const FirstRobot = ({ value }: MachineParts) => {
  return (
    <>
      <mesh
        scale={0.1}
        position={[-2, 0, -0.2]}
        rotation-y={(180 * Math.PI) / 180}
        rotation-x={(90 * Math.PI) / 180}>
        <Body />
        <mesh position={[0, value, 0]}>
          <Pusher />
        </mesh>
      </mesh>
    </>
  );
};
