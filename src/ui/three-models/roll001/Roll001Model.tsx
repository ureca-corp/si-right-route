import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Roll001Model() {
  const gltf = useLoader(GLTFLoader, "/three-models/roll_01.gltf");

  const refMesh = useRef<any>();

  useFrame(() => {
    if (refMesh.current) {
      refMesh.current.rotation.x += 0.02;
      refMesh.current.rotation.y += 0.01;
      refMesh.current.rotation.z += 0.0001;
    }
  });

  return (
    <mesh ref={refMesh} position={[0, -0, -5]} rotation={[2.2, 0, -0.8]}>
      <primitive object={gltf.scene} scale={0.005} />;
    </mesh>
  );
}
