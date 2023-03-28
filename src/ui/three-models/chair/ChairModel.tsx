import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function ChairModel() {
  const gltf = useLoader(GLTFLoader, "/three-models/chair/chair.gltf");

  const refMesh = useRef<any>();

  useFrame(() => {
    if (refMesh.current) {
      // refMesh.current.rotation.x += 0.005;
      // refMesh.current.rotation.y += 0.005;
      // refMesh.current.rotation.z += 0.01;
    }
  });

  return (
    <mesh ref={refMesh} rotation={[Math.PI / -0.1, -0.2, 0.1]}>
      <primitive object={gltf.scene} scale={4} />;
    </mesh>
  );
}
