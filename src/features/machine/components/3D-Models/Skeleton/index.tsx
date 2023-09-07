import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const Skeleton = () => {
  const gltf = useLoader(GLTFLoader, '/gltf/Robot_Body.gltf');
  return (
    <mesh
      scale={0.1}
      position-y={-0.7}
      position-z={-1.3}
      rotation-x={-(90 * Math.PI) / 180}
      rotation-z={(180 * Math.PI) / 180}>
      <primitive object={gltf.scene} />
    </mesh>
  );
};
