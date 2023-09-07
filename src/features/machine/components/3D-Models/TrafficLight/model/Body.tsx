import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';

import { Red } from '@/features/machine/components/3D-Models/TrafficLight/model/Red';
import { Yellow } from '@/features/machine/components/3D-Models/TrafficLight/model/Yellow';
import { Green } from '@/features/machine/components/3D-Models/TrafficLight/model/Green';

export const Body = () => {
  const { scene } = useLoader(GLTFLoader, '/gltf/TrafficLight_Body.glb');

  return (
    <mesh scale={15} position={[7.5, -5, -3.5]}>
      <primitive object={scene} />
      <Red />
      <Yellow />
      <Green />
    </mesh>
  );
};
