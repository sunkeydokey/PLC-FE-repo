import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const PeekerY = () => {
  const gltf = useLoader(GLTFLoader, '/gltf/Robot_3_Y_Axes.gltf');
  return <primitive object={gltf.scene} />;
};
