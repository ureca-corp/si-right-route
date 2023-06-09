import { Stack, Typography } from "@mui/material";
import { css } from "@emotion/react";
import { Mq } from "../theme/screen";

type ChapterTitleType = {
  numb: number;
};

export const ChapterTitle = ({ numb }: ChapterTitleType) => {
  return (
    <Stack direction="row" css={sx.chaptor}>
      <Typography variant="h6" component={"div"}>
        CHAPTER
      </Typography>
      <Typography css={sx.numb}> 0{numb}</Typography>
    </Stack>
  );
};

const sx = {
  chaptor: css`
    border-bottom: 1px solid #fff;
    align-items: baseline;
    @media ${Mq.sm} {
      margin-bottom: 20px;
    }
  `,
  numb: css`
    font-size: 28px !important;
    font-weight: 500;
  `,
};
