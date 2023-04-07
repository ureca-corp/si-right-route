import { RefObject, useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
}

// =================================================================

const MOTION_SPEED_FACTOR = 0.001;

// =================================================================

export const useRoundCarousel = (itemCount: number, speed: number) => {
  const containerRef = useRef<any>() as RefObject<HTMLDivElement>;
  const anchorRef = useRef<any>() as RefObject<HTMLDivElement>;
  const targetsRefArray = useRef<any>([]) as any;

  const anchorX = anchorRef.current?.offsetLeft ?? 0;
  const anchorY = anchorRef.current?.offsetTop ?? 0;

  let motionValue = 0; // 운동량

  const animate = () => {
    const containerWidth = containerRef.current?.offsetWidth ?? 0;
    const radius = containerWidth / 2.5;

    const $targets = targetsRefArray.current;

    $targets.forEach((it: HTMLDivElement, index: number) => {
      const { x, y } = getPointOnItem(
        {
          x: anchorX,
          y: anchorY,
        },
        radius,
        itemCount,
        index,
        motionValue
      );

      const targetHalfWidth = it.offsetWidth / 2;
      const targetHalfHeight = it.offsetHeight / 2;

      const xPos = x - targetHalfWidth;
      const yPos = y - targetHalfHeight;
      const zIndex = -(y * index);

      it.style.left = `${xPos}px`;
      it.style.top = `${yPos}px`;
      it.style.transform = `translateZ(${y}px)`;
      it.style.zIndex = zIndex.toString();
    });

    const motionSpeed = speed * MOTION_SPEED_FACTOR;
    motionValue -= motionSpeed;

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    animate();
  }, []);

  return {
    containerRef,
    anchorRef,
    targetsRefArray,
  };
};

const getPointOnItem = (
  center: Point,
  radius: number,
  numberOfPoints: number,
  targetIndex: number,
  motionValue: number
): Point => {
  const angleIncrement = (2 * Math.PI) / numberOfPoints;
  const angle = targetIndex * angleIncrement + motionValue;

  const angleOffsetOfX = 60;

  const tiltFactorOfY = 2.2;

  const x = center.x + radius * Math.cos(angle + angleOffsetOfX);
  const y = center.y + (radius / tiltFactorOfY) * Math.sin(angle);

  return {
    x,
    y,
  };
};
