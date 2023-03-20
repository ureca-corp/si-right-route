import { Mq } from "@/common/theme/screen";
import line from "@/Line.png";
import Oval from "@/Oval.png";
// import { ReactComponent as Oval2 } from "@/oval-v2.svg";
import Oval2 from "@/oval-v2.svg";
import { css, Stack, Typography, useTheme } from "@mui/material";

import Image from "next/image";

export const WorldFirst = () => {
  const theme = useTheme();

  const isThemeDark = theme.palette.background.default == "#000";

  return (
    <Stack css={sx.root}>
      <Stack css={sx.textWrap}>
        <Typography
          css={sx.world}
          variant="h1"
          data-aos="fade-down"
          data-aos-easing="ease-in-out"
        >
          {"World's FIRST"}
        </Typography>

        <Typography
          variant="h3"
          data-aos="fade-down"
          data-aos-easing="ease-in-out"
        >
          {"배터리 분리막 리사이클 신소재"}
        </Typography>
        <Typography
          css={sx.texnic}
          variant="h1"
          data-aos="fade-down"
          data-aos-easing="ease-in-out"
        >
          TEXNIC
          <sup css={sx.sup}>®</sup>
        </Typography>

        <div css={sx.line} data-aos="fade-in" data-aos-easing="ease-in-out">
          <Image src={line} alt="line" fill sizes={"100"} />
        </div>
        <Typography variant="body2" data-aos={"fade-in"}>
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
    padding-bottom: 24vw;

    @media ${Mq.sm} {
      padding-bottom: 120px;
    }
  `,
  textWrap: css`
    align-items: center;
  `,
  world: css`
    margin-top: 20.833vw;
    line-height: 11.667vw;
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
    height: 26.042vw;
    font-weight: 700;
    margin-bottom: 2vw;
  `,
  oval: css`
    margin-top: 2.083vw;
    position: relative;
    width: 5.208vw;
    height: 2.083vw;
    transform: rotate3d(1, 1, 1, -45deg);

    @media ${Mq.sm} {
      margin-top: 8px;
      width: 36px;
      height: 16px;
    }
  `,
  recycleImage: css`
    width: 52.083vw;
    height: 36.458vw;
    background-color: #fff;
  `,
};

const WorldImage = () => {
  // return <div css={sx.recycleImage} />;
};
