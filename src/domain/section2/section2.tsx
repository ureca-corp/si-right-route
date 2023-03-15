import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { css } from "@emotion/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Section2 = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
      <Stack css={sx.root}>
        <Typography variant="h2">2025년 폐 이차전지 분리막</Typography>
        <Typography css={sx.head1} variant="h1">
          176,740톤
        </Typography>
        <div css={sx.head3}>
          축구장의
          <Typography css={sx.number} variant="h1">
            {" "}
            80,000{" "}
          </Typography>
          배
        </div>
      </Stack>
    </div>
  );
};

const sx = {
  root: css`
    align-items: center;
  `,
  head1: css`
    line-height: 11.667vw;
  `,
  head3: css`
    font-size: 3.125vw;
    display: flex;
    align-items: flex-end;
  `,
  number: css`
    line-height: 11.667vw;
  `,
};
