import { ChapterTitle } from "@/common/components/chapterTitle";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

export const Section2 = () => {
  return (
    <div data-aos="fade-down">
      <Stack css={sx.root}>
        <ChapterTitle numb={1} />
        <Typography css={sx.head1} variant="h5">
          왜 배터리 분리막이었을까
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
    line-height: 7.667vw;
    align-items: baseline;
  `,
};
