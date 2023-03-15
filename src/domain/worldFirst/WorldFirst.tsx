import line from "@/Line.png";
import Oval from "@/Oval.png";
import { css, Stack, Typography } from "@mui/material";
import AOS from "aos";

import Image from "next/image";
import { useEffect } from "react";

export const WorldFirst = () => {
  return (
    <Stack css={sx.root}>
      <WorldImage />
      <Stack
        css={sx.textWrap}
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <Typography css={sx.world} variant="h1">
          {"World's FIRST"}
        </Typography>
        <Typography variant="h3">{"배터리 분리막 리사이클 신소재"}</Typography>
        <Typography css={sx.texnic} variant="h1">
          {"TEXNIC"}
        </Typography>

        <div css={sx.line}>
          <Image src={line} alt="line" fill sizes={"100"} />
        </div>
        <Typography variant="body2">
          {`"Take a New Spin for the future"`}
        </Typography>
        <div css={sx.oval}>
          <Image src={Oval} alt="oval" fill sizes={"100"}></Image>
        </div>
      </Stack>
    </Stack>
  );
};

const sx = {
  root: css`
    align-items: center;
    position: relative;
    padding-bottom: 5vw;
  `,
  textWrap: css`
    align-items: center;
  `,
  world: css`
    margin-top: 20.833vw;
    line-height: 11.667vw;
  `,
  texnic: css`
    line-height: 11.667vw;
    font-weight: 900;
    margin-bottom: 28.125vw;
  `,
  line: css`
    width: 1px;
    height: 26.042vw;
    position: absolute;
    bottom: 11vw;
    left: 26vw;
    font-weight: 700;
  `,
  oval: css`
    margin-top: 2.083vw;
    position: relative;
    width: 5.208vw;
    height: 2.083vw;
    transform: rotate3d(1, 1, 1, -45deg);
  `,
  recycleImage: css`
    width: 52.083vw;
    height: 36.458vw;
    background-color: #fff;
  `,
};

const WorldImage = () => {
  return <div css={sx.recycleImage} />;
};
