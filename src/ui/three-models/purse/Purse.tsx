import { Canvas } from "@react-three/fiber";
import { lazy } from "react";

const Model = lazy(() => import("./PurseModel"));

export const Purse = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <Model />
    </Canvas>
  );
};
