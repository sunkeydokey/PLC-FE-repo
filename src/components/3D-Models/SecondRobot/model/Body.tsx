import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const Body = () => {
  const gltf = useLoader(GLTFLoader, '/gltf/Robot_2_Body.gltf');
  return <primitive object={gltf.scene} />;
};
