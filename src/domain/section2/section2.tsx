import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

export const Section2 = () => {
  return (
    <div data-aos="fade-down">
      <Stack css={sx.root}>
        <Typography variant="h2">2025년 폐 이차전지 분리막</Typography>
        <Typography css={sx.head1}>
          <span css={sx.number}>176,740</span>
          <span css={sx.ton}>톤</span>
        </Typography>

        <Typography css={sx.head3} component={"div"}>
          축구장의
          <Typography css={sx.number} variant="h1">
            80,000
          </Typography>
          배
        </Typography>
      </Stack>
    </div>
  );
};

const sx = {
  root: css`
    align-items: center;
  `,
  head1: css`
    font-size: 8.333vw;
    display: flex;
    line-height: 11.667vw;
    align-items: baseline;
  `,

  ton: css`
    line-height: 11.667vw;
  `,
  head3: css`
    font-size: 3.125vw;
    display: flex;
    align-items: baseline;
    gap: 1vw;
  `,
  number: css`
    line-height: 11.667vw;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 700;
  `,
};
