import { Circle } from '@react-three/drei';

import { Body } from '@/features/machine/components/3D-Models/ThirdRobot/model/Body';
import { Peeker } from '@/features/machine/components/3D-Models/ThirdRobot/model/Peeker';
import { PeekerX } from '@/features/machine/components/3D-Models/ThirdRobot/model/PeekerX';
import { PeekerY } from '@/features/machine/components/3D-Models/ThirdRobot/model/PeekerY';

import type { Machine } from '@/features/machine/plc-control/types';

export const ThirdRobot = ({ scale, angle, value }: Machine) => {
  return (
    <mesh
      scale={scale}
      position-x={2}
      rotation-x={(90 * Math.PI) / 180}
      rotation-y={(180 * Math.PI) / 180}
      rotation-z={(10 * Math.PI) / 180}>
      <Body />
      <mesh position-y={2.7} position-x={0.5} position-z={value}>
        <PeekerY />
        <mesh>
          <Circle
            position-x={0.5}
            position-y={2.5}
            position-z={0}
            rotation-z={((angle as number) * Math.PI) / 180}>
            <mesh position-y={-1.3} position-x={-6} position-z={-2.5}>
              <PeekerX />

              <mesh
                position-x={-4}
                position-y={-1.5}
                position-z={-1}
                rotation-z={((-(angle as number) + 10) * Math.PI) / 180}>
                <Peeker />
              </mesh>
            </mesh>
          </Circle>
        </mesh>
      </mesh>
    </mesh>
  );
};
