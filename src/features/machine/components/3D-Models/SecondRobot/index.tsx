import { Body } from '@/features/machine/components/3D-Models/SecondRobot/model/Body';
import { Pusher } from '@/features/machine/components/3D-Models/SecondRobot/model/Pusher';

import type { Machine } from '@/features/machine/plc-control/types';

export const SecondRobot = ({ scale, value }: Machine) => {
  return (
    <>
      <mesh
        scale={scale}
        rotation-y={(180 * Math.PI) / 180}
        rotation-x={(90 * Math.PI) / 180}>
        <Body />
        <mesh position={[0, (value as number) - 3, 0]}>
          <Pusher />
        </mesh>
      </mesh>
    </>
  );
};
