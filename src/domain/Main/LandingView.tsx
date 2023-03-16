import { css } from "@emotion/react";
import { OneofaKind } from "../OneOfaKind.tsx/OneOfaKind";
import { Section1 } from "../section1/Section1";
import { Section2 } from "../section2/section2";
import { Section3 } from "../section3/section3";
import { Section3V2 } from "../section3/section3-v2";
import { SlideSection } from "../SlideSection/SlideSecion";
import { WorldFirst } from "../worldFirst/WorldFirst";
import bg from "@/bg.png";
import Image from "next/image";
import { Stack } from "@mui/material";

export const LandingView = () => {
  return (
    <div css={sx.root}>
      <Stack css={sx.contentWrap}>
        <Section1 />
        <Section2 />
        <SlideSection />
        <Section3 />
        {/* <Section3V2 /> */}
        <OneofaKind />
        <WorldFirst />
      </Stack>

      <div css={sx.bg}>
        <Image src={bg} alt="bg" fill sizes="100" />
      </div>
    </div>
  );
};

const sx = {
  root: css`
    /* background-color: #000; */
    position: relative;
  `,
  contentWrap: css`
    position: relative;
    z-index: 5;
  `,
  bg: css`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  `,
};
