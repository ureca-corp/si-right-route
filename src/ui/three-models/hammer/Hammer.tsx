import { Canvas } from "@react-three/fiber";
import { lazy } from "react";

const Model = lazy(() => import("./HammerModel"));

export const Hammer = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <Model />
    </Canvas>
  );
};
