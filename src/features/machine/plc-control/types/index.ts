import type { Vector3 } from '@react-three/fiber';

export type Machine = {
  scale: Vector3 | undefined;
  angle?: number;
  value?: number;
};
