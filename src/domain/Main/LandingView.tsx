import bg from "@/assets/bg.png";
import { useCustomMediaQuery } from "@/common/theme/screen";
import { css } from "@emotion/react";
import { Stack } from "@mui/material";
import Image from "next/image";
import { Chapter1 } from "../chapter1/chapter1";
import { Chapter2 } from "../chapter2/chapter2";
import { Chapter3V2 } from "../chapter3/chapter3v2";
import { Intro } from "../intro/intro";
import { WorldFirst } from "../worldFirst/WorldFirst";

export const LandingView = () => {
  const { isSmall } = useCustomMediaQuery();
  return (
    <div css={sx.root}>
      <Stack css={sx.contentWrap}>
        <Intro />
        <Chapter1 />
        <Chapter2 />
        <Chapter3V2 />

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
