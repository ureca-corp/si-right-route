import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function ScsissorsModel() {
  const gltf = useLoader(GLTFLoader, "/three-models/scissors.gltf");
  const refMesh = useRef<any>();

  useFrame(() => {
    if (refMesh.current) {
      refMesh.current.rotation.x += 0.02;
      refMesh.current.rotation.y += 0.01;
      refMesh.current.rotation.z += 0.005;
    }
  });

  return (
    <mesh ref={refMesh} position={[0, -0, -5]} rotation={[2.2, 0, -0.8]}>
      <primitive object={gltf.scene} scale={50} />;
    </mesh>
  );
}
