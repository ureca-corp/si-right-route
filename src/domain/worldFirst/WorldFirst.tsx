import { css, Stack, Typography } from "@mui/material";
import { RecycleImage } from "../OneOfaKind.tsx/OneOfaKind";
import line from "@/Line.png";
import Image from "next/image";
import Oval from "@/oval.png";

export const WorldFirst = () => {
  return (
    <Stack css={sx.root}>
      <RecycleImage />
      <Typography css={sx.world} variant="h1">
        {"World's FIRST"}
      </Typography>
      <Typography variant="h3">{"배터리 분리막 리사이클 신소재"}</Typography>
      <Typography css={sx.texnic} variant="h1">
        {"TEXNIC"}
      </Typography>
      <div css={sx.line}>
        <Image src={line} alt="line" fill />
      </div>
      <Typography variant="body2">
        {`"Take a New Spin for the future"`}
      </Typography>
      <Image
        css={sx.oval}
        src={Oval}
        alt="oval"
        width={100}
        height={40}
      ></Image>
    </Stack>
  );
};

const sx = {
  root: css`
    align-items: center;
    position: relative;
  `,
  world: css`
    margin-top: 20.833vw;
    line-height: 11.667vw;
  `,
  texnic: css`
    line-height: 11.667vw;
    font-weight: 400;
    margin-bottom: 28.125vw;
  `,
  line: css`
    width: 1px;
    height: 26.042vw;
    position: absolute;
    bottom: 9vw;
    left: 50vw;
    font-weight: 700;
  `,
  oval: css`
    margin-top: 2.083vw;
  `,
};
