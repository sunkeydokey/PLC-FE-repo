import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';

export const Green = () => {
  const { scene } = useLoader(GLTFLoader, '/gltf/TrafficLight_Green.glb');

  return (
    <mesh scale={1} position={[0, 0, 0]}>
      <primitive object={scene} />
    </mesh>
  );
};
