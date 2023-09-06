import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import type { Machine } from '@/features/machine/plc-control/types';

export const Skeleton = ({ scale }: Machine) => {
  const gltf = useLoader(GLTFLoader, '/gltf/Robot_Body.gltf');
  return (
    <mesh
      scale={scale}
      position-y={-0.7}
      position-z={-1.3}
      rotation-x={-(90 * Math.PI) / 180}
      rotation-z={(180 * Math.PI) / 180}>
      <primitive object={gltf.scene} />
    </mesh>
  );
};
