import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { useLoader } from "@react-three/fiber";

export default function CarSeatModel() {
  const gltf = useLoader(GLTFLoader, "/three-models/carSeat/carSeat.gltf");

  const refMesh = useRef<any>();

  return (
    <mesh
      ref={refMesh}
      rotation={[Math.PI / -3, 4.5, -14]}
      position={[0, -1, 0]}
    >
      <primitive object={gltf.scene} scale={0.005} />;
    </mesh>
  );
}
