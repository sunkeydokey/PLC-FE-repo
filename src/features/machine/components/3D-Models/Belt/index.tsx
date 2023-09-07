import { useEffect, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { useAnimations } from '@react-three/drei';

import type { Mesh } from 'three';

export const Belt = ({ isOnMove }: { isOnMove: boolean }) => {
  const { scene, animations } = useLoader(GLTFLoader, '/gltf/Robot_Belt.glb');
  const ref = useRef<Mesh>(null);

  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isOnMove as boolean) actions['Key.005Action.003']?.play();
    if (!(isOnMove as boolean)) actions['Key.005Action.003']?.stop();

    return () => {
      actions['Key.005Action.003']?.stop();
    };
  }, [ref, actions, isOnMove]);

  return (
    <mesh
      ref={ref}
      scale={[10.2, 9, 9]}
      position-z={-1}
      position-y={-0.8}
      position-x={0.8}
      rotation-y={(180 * Math.PI) / 180}>
      <primitive object={scene} />
    </mesh>
  );
};
