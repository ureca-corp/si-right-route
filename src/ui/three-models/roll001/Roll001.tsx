import { Canvas } from "@react-three/fiber";
import { lazy } from "react";

const Model = lazy(() => import("./Roll001Model"));

export const Roll001 = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <Model />
    </Canvas>
  );
};
