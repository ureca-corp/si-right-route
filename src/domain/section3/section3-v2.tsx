import { Hammer, Microscope, Scsissors, Tape } from "@/ui/three-models";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { FadeUp } from "./el";

export const Section3V2 = () => {
  return (
    <Stack css={sx.root}>
      <ScissorsImage />
      <div css={sx.hammer}>
        <FadeUp>
          <Hammer />
        </FadeUp>
      </div>
      <div css={sx.scsissors}>
        <FadeUp>
          <Scsissors />
        </FadeUp>
      </div>
      <div css={sx.tape}>
        <FadeUp>
          <Tape />
        </FadeUp>
      </div>
      <div css={sx.microscope}>
        <FadeUp>
          <Microscope />
        </FadeUp>
      </div>
      <Typography css={sx.text} variant="body2" data-aos={"fade-up"}>
        {
          "우리는 독자적인 재활용 기술을 개발하였고,\n버려진 이차전지 분리막이\n가진 미세다공형 구조를 그대로 살린\n기능성 리사이클 섬유 제품을\n‘세계 최초로’\n선보일 수 있었습니다."
        }
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
  text: css`
    margin: 20.833vw 0;
    text-align: center;
  `,

  item: css`
    position: absolute;
    width: 30vw;
    aspect-ratio: 1;
  `,
  hammer: css`
    position: absolute;
    width: 36vw;
    aspect-ratio: 1;

    top: -12vw;
    left: 14vw;

    animation: hammer-levitate-animation 2s infinite alternate;
    animation-timing-function: ease-in-out;
    @keyframes hammer-levitate-animation {
      0% {
        transform: translate(0, 0px);
      }
      100% {
        transform: translate(0, 30px);
      }
    }
  `,
  scsissors: css`
    position: absolute;
    width: 16vw;
    aspect-ratio: 1;

    top: 24vw;
    left: 24vw;

    animation-delay: 0.5s;
    animation: scsissors-levitate-animation 3s infinite alternate;
    animation-timing-function: ease-in-out;
    @keyframes scsissors-levitate-animation {
      0% {
        transform: translate(20px, 48px);
      }
      100% {
        transform: translate(0, 0px);
      }
    }
  `,
  tape: css`
    position: absolute;
    width: 20vw;
    aspect-ratio: 1;

    top: -10vw;
    left: 56vw;

    animation-delay: 1.5s;
    animation: tape-levitate-animation 3s infinite alternate;
    animation-timing-function: ease-in-out;
    @keyframes tape-levitate-animation {
      0% {
        transform: translate(0px, 20px);
      }
      100% {
        transform: translate(0, 0px);
      }
    }
  `,
  microscope: css`
    position: absolute;
    width: 70vw;
    aspect-ratio: 1;

    top: 6vw;
    left: 35vw;

    animation: microscope-levitate-animation 1s infinite alternate;
    animation-timing-function: ease-in-out;
    @keyframes microscope-levitate-animation {
      0% {
        transform: translate(0, 0px);
      }
      100% {
        transform: translate(0, 10px);
      }
    }
  `,
};

const ScissorsImage = () => {
  return <div css={sx.image} />;
};
