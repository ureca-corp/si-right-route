import { Stack, Typography } from "@mui/material";
import { css } from "@emotion/react";

type ChapterTitleType = {
  numb: number;
};

export const ChapterTitle = ({ numb }: ChapterTitleType) => {
  return (
    <Stack direction="row" css={sx.chaptor}>
      <Typography variant="h6" component={"div"}>
        CHAPTOR
      </Typography>
      <Typography css={sx.numb}> 0{numb}</Typography>
    </Stack>
  );
};

const sx = {
  chaptor: css`
    padding: 0 20px;
    border-bottom: 1px solid #fff;
    align-items: baseline;
  `,
  numb: css`
    font-size: 28px !important;
    font-weight: 500;
  `,
};
