import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function MicroscopeModel() {
  const gltf = useLoader(GLTFLoader, "/three-models/microscope.gltf");

  const refMesh = useRef<any>();

  useFrame(() => {
    if (refMesh.current) {
      refMesh.current.rotation.x += 0.005;
      refMesh.current.rotation.z += 0.0025;
    }
  });

  return (
    <mesh ref={refMesh} position={[0, 0, 0]} rotation={[-0.3, -0.8, -0.3]}>
      <primitive object={gltf.scene} scale={0.11} />;
    </mesh>
  );
}
