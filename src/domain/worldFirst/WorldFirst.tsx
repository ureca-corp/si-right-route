import { Mq, useCustomMediaQuery } from "@/common/theme/screen";
import line from "@/assets/Line.png";
import Oval from "@/assets/Oval.png";

import Oval2 from "@/assets/oval-v2.svg";
import { css, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";

export const WorldFirst = () => {
  const theme = useTheme();
  const isThemeDark = theme.palette.background.default == "#000";
  const { isExtraSmall } = useCustomMediaQuery();
  return (
    <Stack css={sx.root}>
      <Stack css={sx.textWrap}>
        <Typography
          css={sx.world}
          variant="h1"
          data-aos={"fade-up"}
          data-aos-duration="2000"
        >
          {"World's FIRST"}
        </Typography>

        <Typography
          css={sx.battery}
          variant="h3"
          data-aos={"fade-up"}
          data-aos-duration="2000"
        >
          {isExtraSmall
            ? "배터리 분리막\n리사이클 신소재"
            : "배터리 분리막 리사이클 신소재"}
        </Typography>
        <Typography
          css={sx.texnic}
          variant="h1"
          data-aos={"fade-up"}
          data-aos-duration="2000"
        >
          {"TEXNIC"}
          <sup css={sx.sup}>®</sup>
        </Typography>

        <div css={sx.line} data-aos="fade-in" data-aos-easing="ease-in-out">
          <Image src={line} alt="line" fill sizes={"100"} />
        </div>
        <Typography
          css={sx.take}
          variant="h5"
          data-aos={"fade-in"}
          data-aos-duration="2000"
        >
          {`"Take a New Spin for the future"`}
        </Typography>
        <div css={sx.oval}>
          {isThemeDark ? (
            <Image
              src={Oval}
              alt="oval"
              fill
              sizes={"100"}
              data-aos={"fade-in"}
            />
          ) : (
            <Image
              src={Oval2}
              alt="oval"
              fill
              sizes={"100"}
              data-aos={"fade-in"}
            />
          )}
        </div>
      </Stack>
    </Stack>
  );
};

const sx = {
  root: css`
    align-items: center;
    position: relative;
    padding-bottom: 11vw;

    @media ${Mq.md} {
      padding-bottom: 120px;
    }
  `,
  textWrap: css`
    align-items: center;
  `,
  world: css`
    margin-top: 15.833vw;
    line-height: 6.667vw;
    @media ${Mq.md} {
      margin-bottom: 10px;
    }
    @media ${Mq.xs} {
      text-align: center;
      line-height: 1.167;
    }
  `,
  texnic: css`
    line-height: 11.667vw;
    font-weight: 900;
    margin-top: 5vw;
  `,
  sup: css`
    font-size: 30px;
    position: relative;
    top: -29px;
  `,
  line: css`
    position: relative;
    width: 1px;
    height: 21.042vw;
    font-weight: 700;
    margin-bottom: 2vw;
  `,
  take: css`
    font-family: Noto Sans KR !important;
    text-align: center;
  `,
  oval: css`
    margin-top: 2.083vw;
    position: relative;
    width: 5.208vw;
    height: 3.083vw;
    animation: rotate 4s infinite linear;
    @keyframes rotate {
      0% {
        transform: rotate3d(0, 1, 0, 0deg);
      }
      100% {
        transform: rotate3d(0, 1, 0, 360deg);
      }
    }
    @media ${Mq.sm} {
      margin-top: 8px;
      width: 36px;
      height: 16px;
    }
  `,
  battery: css`
    text-align: center;
  `,
};
