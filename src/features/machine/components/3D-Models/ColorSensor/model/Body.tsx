import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';

import { Red } from '@/features/machine/components/3D-Models/ColorSensor/model/Red';
import { Green } from '@/features/machine/components/3D-Models/ColorSensor/model/Green';

export const Body = () => {
  const { scene } = useLoader(GLTFLoader, '/gltf/ColorSensor_Body.glb');

  return (
    <mesh
      scale={15}
      position={[1, -1, -2.5]}
      rotation-y={(180 * Math.PI) / 180}>
      <primitive object={scene} />
      <Red />
      <Green />
    </mesh>
  );
};
