import { Body } from '@/features/machine/components/3D-Models/FirstRobot/model/Body';
import { Pusher } from '@/features/machine/components/3D-Models/FirstRobot/model/Pusher';

import type { Machine } from '@/features/machine/plc-control/types';

export const FirstRobot = ({ scale, value }: Machine) => {
  return (
    <>
      <mesh
        scale={scale}
        position={[-2, 0, -0.2]}
        rotation-y={(180 * Math.PI) / 180}
        rotation-x={(90 * Math.PI) / 180}>
        <Body />
        <mesh position={[0, value as number, 0]}>
          <Pusher />
        </mesh>
      </mesh>
    </>
  );
};
