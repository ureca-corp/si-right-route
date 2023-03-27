import { Canvas } from "@react-three/fiber";
import { lazy } from "react";

const Model = lazy(() => import("./Roll002Model"));

export const Roll002 = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <Model />
    </Canvas>
  );
};
