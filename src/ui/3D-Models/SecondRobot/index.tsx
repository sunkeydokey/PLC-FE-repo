import { Body } from '@ui/3D-Models/SecondRobot/model/Body';
import { Pusher } from '@ui/3D-Models/SecondRobot/model/Pusher';

import type { Machine } from '@/features/plc-control/types';

export const SecondRobot = ({ scale, value }: Machine) => {
  return (
    <>
      <mesh
        scale={scale}
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
