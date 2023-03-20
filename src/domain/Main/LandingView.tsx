import { css } from "@emotion/react";
import { OneofaKind } from "../chapter2/chapter2";
import { Section1 } from "../intro/intro";
import { Section2 } from "../chapter1/chapter1";
import { Section3 } from "../section3/section3";
import { Section3V2 } from "../section3/section3-v2";
import { WorldFirst } from "../worldFirst/WorldFirst";
import bg from "@/bg.png";
import Image from "next/image";
import { Stack } from "@mui/material";
import { Chapter3 } from "../chapter3/chapter3";

export const LandingView = () => {
  return (
    <div css={sx.root}>
      <Stack css={sx.contentWrap}>
        <Section1 />
        <Section2 />
        <Section3 />
        {/* <Section3V2 /> */}
        <OneofaKind />
        <Chapter3 />
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
