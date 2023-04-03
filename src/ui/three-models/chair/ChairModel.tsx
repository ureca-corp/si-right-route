import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { useLoader } from "@react-three/fiber";

export default function ChairModel() {
  const gltf = useLoader(GLTFLoader, "/three-models/chair/chair.gltf");

  const refMesh = useRef<any>();

  return (
    <mesh ref={refMesh} rotation={[0.2, -0.2, 0.1]} position={[0.35, -1.3, 0]}>
      <primitive object={gltf.scene} scale={5} />;
    </mesh>
  );
}
