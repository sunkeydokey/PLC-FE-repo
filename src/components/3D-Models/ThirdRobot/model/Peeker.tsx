import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const Peeker = () => {
  const gltf = useLoader(GLTFLoader, '/gltf/Robot_3_Peeker.gltf');
  return <primitive object={gltf.scene} />;
};
