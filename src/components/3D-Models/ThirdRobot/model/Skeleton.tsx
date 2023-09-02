import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const Skeleton = () => {
  const gltf = useLoader(GLTFLoader, '/gltf/Robot_3_Skeleton.gltf');
  return <primitive object={gltf.scene} />;
};
