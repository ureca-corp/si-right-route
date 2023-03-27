import { Canvas } from "@react-three/fiber";
import { lazy } from "react";

const Model = lazy(() => import("./Roll003Model"));

export const Roll003 = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <Model />
    </Canvas>
  );
};
