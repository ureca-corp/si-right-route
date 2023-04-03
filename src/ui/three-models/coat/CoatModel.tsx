import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { useLoader } from "@react-three/fiber";

export default function CoatModel() {
  const gltf = useLoader(GLTFLoader, "/three-models/coat/coat.gltf");

  const refMesh = useRef<any>();

  return (
    <mesh
      ref={refMesh}
      rotation={[Math.PI / -0.1, -0.2, 0.1]}
      position={[0.5, -9.4, 0]}
    >
      <primitive object={gltf.scene} scale={8} />;
    </mesh>
  );
}
