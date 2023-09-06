import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const PeekerX = () => {
  const gltf = useLoader(GLTFLoader, '/gltf/Robot_3_X_Axes.gltf');
  return <primitive object={gltf.scene} />;
};
