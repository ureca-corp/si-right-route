import { css, Stack, Typography } from "@mui/material";
import "aos/dist/aos.css";

export const OneofaKind = () => {
  return (
    <Stack css={sx.root}>
      <Typography css={sx.kind} variant="body1">
        One-of-a-Kind
      </Typography>
      <Typography css={sx.h1} variant="h1">
        RECYCLED
      </Typography>
      <Typography css={sx.h2} variant="h2">
        Functional
      </Typography>
      <Typography css={sx.material} variant="h1">
        MATERIAL
      </Typography>
      <RecycleImage />
      <Typography css={sx.text} variant="body2">
        환경을 위한 탄소배출을 저감 소재임은 물론,{"\n\n"}
        패션 제품부터{"\n"}아웃도어, 인테리어, 자동차 시트까지...{"\n"}다양한
        아이템으로 전개가 가능한{"\n"}놀라운 확장성까지!
      </Typography>
    </Stack>
  );
};

const sx = {
  root: css`
    align-items: center;
  `,
  kind: css`
    line-height: 4.375vw;
  `,
  h1: css`
    line-height: 11.667vw;
  `,
  material: css`
    font-weight: 700;
    line-height: 11.667vw;
  `,
  h2: css`
    color: #000;
    background: linear-gradient(
      90deg,
      #bebebd 0%,
      #e3e3e3 28.8%,
      #bebfbb 60.02%,
      #dcdcdb 100%
    );
    padding: 0 2.083vw;
    line-height: 7.292vw;
  `,
  recycleImage: css`
    width: 52.083vw;
    height: 36.458vw;
    background-color: #fff;
  `,
  text: css`
    margin: 20.833vw 0;
    text-align: center;
  `,
};

const RecycleImage = () => {
  return (
    <div
      css={sx.recycleImage}
      data-aos="fade-left"
      data-aos-easing="linear"
      data-aos-duration="1500"
    />
  );
};
