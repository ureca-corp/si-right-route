import { css } from "@emotion/react";
import { OneofaKind } from "../OneOfaKind.tsx/OneOfaKind";
import { Section1 } from "../section1/Section1";
import { Section2 } from "../section2/section2";
import { Section3 } from "../section3/section3";
import { Section3V2 } from "../section3/section3-v2";
import { SlideSection } from "../SlideSection/SlideSecion";
import { WorldFirst } from "../worldFirst/WorldFirst";

export const LandingView = () => {
  return (
    <div css={sx.root}>
      <Section1 />
      <Section2 />
      <SlideSection />
      <Section3 />
      {/* <Section3V2 /> */}
      <OneofaKind />
      <WorldFirst />
    </div>
  );
};

const sx = {
  root: css`
    background-color: #000;
  `,
};
