import { css } from "@emotion/react";
import { Chapter2 } from "../chapter2/chapter2";
import { Intro } from "../intro/intro";
import { Chapter1 } from "../chapter1/chapter1";
import { Section3V2 } from "../section3/section3-v2";
import { WorldFirst } from "../worldFirst/WorldFirst";
import bg from "@/assets/bg.png";
import Image from "next/image";
import { Stack } from "@mui/material";
import { Chapter3 } from "../chapter3/chapter3";
import { useCustomMediaQuery } from "@/common/theme/screen";

export const LandingView = () => {
  const { isSmall } = useCustomMediaQuery();
  return (
    <div css={sx.root}>
      <Stack css={sx.contentWrap}>
        <Intro />
        <Chapter1 />
        {/* <Section3V2 /> */}
        <Chapter2 />
        <Chapter3 />

        <WorldFirst />
      </Stack>
      {isSmall ? null : (
        <div css={sx.bg}>
          <Image src={bg} alt="bg" fill sizes="100" />
        </div>
      )}
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
    right: 0;
    bottom: 0;
  `,
};
