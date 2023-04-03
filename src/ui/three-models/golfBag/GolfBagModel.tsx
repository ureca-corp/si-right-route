import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { useLoader } from "@react-three/fiber";

export default function GolfBagModel() {
  const gltf = useLoader(GLTFLoader, "/three-models/golfBag/golfBag.gltf");

  const refMesh = useRef<any>();

  return (
    <mesh
      ref={refMesh}
      rotation={[Math.PI / -3, 4.5, 5]}
      position={[0.8, -2.8, 0]}
    >
      <primitive object={gltf.scene} scale={0.8} />;
    </mesh>
  );
}
