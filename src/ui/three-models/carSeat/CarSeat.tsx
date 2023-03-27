import { Canvas } from "@react-three/fiber";
import { lazy } from "react";

const Model = lazy(() => import("./CarSeatModel"));

export const CarSeat = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Model />
    </Canvas>
  );
};
