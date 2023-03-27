import { Canvas } from "@react-three/fiber";
import { lazy } from "react";

const Model = lazy(() => import("./menJacketModel"));

export const MenJacket = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <Model />
    </Canvas>
  );
};
