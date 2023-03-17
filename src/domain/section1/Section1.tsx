import { Stack, Typography } from "@mui/material";
import { css } from "@emotion/react";

export const Section1 = () => {
  return (
    <div css={sx.root}>
      <Typography css={sx.aboutUs} variant="body1">
        {"ABOUT US"}
      </Typography>
      <Stack>
        <Stack data-aos="fade-down">
          <Typography css={sx.head2} variant="h2">
            {"전기차 배터리 핵심 부품"}
          </Typography>
          <Typography css={sx.head1} variant="h1">
            {"이차전지\n분리막"}
          </Typography>
        </Stack>

        <Typography css={sx.body} variant="body2" data-aos={"fade-up"}>
          {
            "전기차 생산량이 급격히 늘어남에 따라\n이차전지 분리막의 폐기물\n또한 막대하게 증가하고 있습니다.\n2025년에는 축구장 면적의 8만배나 되는\n배터리 분리막 폐기물이 발생된다고 합니다."
          }
        </Typography>
      </Stack>
    </div>
  );
};

const sx = {
  root: css`
    padding: 8.333vw 8.333vw 0 8.333vw;
  `,
  aboutUs: css`
    height: 29.167vw;
    font-family: "Texnic";
  `,
  textWrap: css`
    align-items: center;
  `,
  head2: css`
    line-height: 7.292vw;
    text-align: center;
  `,
  head1: css`
    text-align: center;
    line-height: 11.667vw;
    margin-bottom: 20.833vw;
  `,
  body: css`
    text-align: center;
    margin-bottom: 20.833vw;
  `,
};
