import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function TapeModel() {
  const gltf = useLoader(GLTFLoader, "/three-models/tape_measure_lowpoly.gltf");

  const refMesh = useRef<any>();

  useFrame(() => {
    if (refMesh.current) {
      refMesh.current.rotation.x -= 0.005;
      refMesh.current.rotation.y -= 0.005;
      refMesh.current.rotation.z += 0.005;
    }
  });

  return (
    <mesh ref={refMesh} position={[0, 0, 0]} rotation={[7, 5.3, 2.1]}>
      <primitive object={gltf.scene} scale={40} />
    </mesh>
  );
}
