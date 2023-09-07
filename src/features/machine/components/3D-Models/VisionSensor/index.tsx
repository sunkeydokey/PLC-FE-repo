import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';

export const VisionSensor = () => {
  const { scene } = useLoader(GLTFLoader, '/gltf/VisionSensor.glb');

  return (
    <mesh
      scale={10}
      rotation-y={(180 * Math.PI) / 180}
      position={[0.7, -0.7, -1.5]}>
      <primitive object={scene} />
    </mesh>
  );
};
