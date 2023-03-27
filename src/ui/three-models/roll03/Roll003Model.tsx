import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Roll003Model() {
  const gltf = useLoader(GLTFLoader, "/three-models/roll_03.gltf");

  const refMesh = useRef<any>();

  useFrame(() => {
    if (refMesh.current) {
      refMesh.current.rotation.x += 0.005;
      refMesh.current.rotation.y += 0.005;
      refMesh.current.rotation.z += 0.01;
    }
  });

  return (
    <mesh ref={refMesh} rotation={[Math.PI / -2, 0.25, 2.7]}>
      <primitive object={gltf.scene} scale={0.004} />;
    </mesh>
  );
}
