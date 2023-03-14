import { css } from "@emotion/react";
import { Stack } from "@mui/system";
import scissors from "@/scissors.png";
import scissors2 from "@/scissors2.png";
import scissors3 from "@/scissors3.png";
import Image from "next/image";
import { Typography } from "@mui/material";

export const Section3 = () => {
  return (
    <Stack css={sx.root}>
      <ScissorsImage />
      <div css={sx.scissors1("0", "17vw")}>
        <Image src={scissors} alt="scissors" fill />
      </div>
      <div css={sx.scissors1("31vw", "17vw")}>
        <Image src={scissors2} alt="scissors" fill />
      </div>
      <div css={sx.scissors1("0vw", "73vw")}>
        <Image src={scissors2} alt="scissors" fill />
      </div>
      <div css={sx.scissors1("31vw", "73vw")}>
        <Image src={scissors3} alt="scissors" fill />
      </div>
      <Typography css={sx.text} variant="body2">
        우리는 독자적인 재활용 기술을 개발하였고,{"\n"}버려진 이차전지 분리막이
        가진 미세다공형 구조를 그대로 살린{"\n"}기능성 리사이클 섬유 제품을
        {"\n"}‘세계 최초로’{"\n"}
        선보일 수 있었습니다.
      </Typography>
    </Stack>
  );
};

const sx = {
  root: css`
    align-items: center;
    position: relative;
  `,
  image: css`
    width: 41.667vw;
    height: 41.667vw;
    border-radius: 50%;
    background-color: #fff;
  `,
  scissors1: (top: string, left: string) => css`
    position: absolute;
    width: 7.781vw;
    height: 9.635vw;
    top: ${top};
    left: ${left};
  `,
  text: css`
    margin: 20.833vw 0;
    text-align: center;
  `,
};

const ScissorsImage = () => {
  return <div css={sx.image} />;
};
