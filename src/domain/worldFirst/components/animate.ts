import { Mq } from "@/common/theme/screen";
import { css } from "@emotion/react";

export const oval1 = css`
  margin-top: 2.083vw;
  position: relative;
  width: 5.208vw;
  height: 3.083vw;
  animation: spinLeft 4s infinite linear;
  @keyframes spinLeft {
    0% {
      transform: rotate3d(0, 1, 0, 0deg);
    }
    100% {
      transform: rotate3d(0, 1, 0, 360deg);
    }
  }
  @media ${Mq.sm} {
    margin-top: 8px;
    width: 36px;
    height: 16px;
  }
`;

export const oval2 = css`
  margin-top: 2.083vw;
  position: relative;
  width: 5.208vw;
  height: 3.083vw;
  animation: spinRight 4s infinite linear;
  @keyframes spinRight {
    0% {
      transform: rotate3d(0, 1, 0, 0deg);
    }
    100% {
      transform: rotate3d(0, 1, 0, 360deg);
    }
  }
  @media ${Mq.sm} {
    margin-top: 8px;
    width: 36px;
    height: 16px;
  }
`;
