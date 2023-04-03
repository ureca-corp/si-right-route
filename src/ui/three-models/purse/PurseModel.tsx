import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { useLoader } from "@react-three/fiber";

export default function PurseModel() {
  const gltf = useLoader(GLTFLoader, "/three-models/purse/purse.gltf");

  const refMesh = useRef<any>();

  return (
    <mesh ref={refMesh} position={[0, -1.5, 0]}>
      <primitive object={gltf.scene} scale={0.08} />;
    </mesh>
  );
}
