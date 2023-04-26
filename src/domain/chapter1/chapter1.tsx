import { ChapterTitle } from "@/common/components/chapterTitle";
import { Mq } from "@/common/theme/screen";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import car from "@/assets/Car.png";
import Image from "next/image";
import { Roll001 } from "@/ui/three-models/roll001";
import { Roll002 } from "@/ui/three-models/roll002/Roll002";
import { Roll003 } from "@/ui/three-models/roll03/Roll003";

export const Chapter1 = () => {
  return (
    <div css={sx.root}>
      <div css={sx.inner}>
        <Stack css={sx.top}>
          <ChapterTitle numb={1} />
          <Typography css={sx.head1} variant="h5">
            왜 배터리 분리막이었을까
          </Typography>
        </Stack>
        <Stack>
          <Stack css={sx.imageWrap}>
            <div css={sx.roll1}>
              <Roll001 />
            </div>
            <div css={sx.roll2}>
              <Roll002 />
            </div>
            <div css={sx.roll3}>
              <Roll003 />
            </div>
            <div css={sx.car}>
              <Image src={car} alt="car" fill sizes="100" />
            </div>
          </Stack>
          <Stack
            css={sx.textWrap}
            data-aos={"fade-down"}
            data-aos-duration="1500"
          >
            <Typography
              css={sx.title}
              variant="h5"
            >{`전기차 배터리 핵심 부품 "배터리 분리막"`}</Typography>
            <Typography css={sx.text} variant="body2">
              {
                "배터리 분리막은 전기차 시장의 활성화와 함께 그 생산량이 급격하게 증가하게 되었습니다.\n친환경 전기차라는 수식어와 다르게 그 뒷단에서는 심각한 환경오염을 유발할 수 있는 막대한 양의 분리막 폐기물이 소각되고 있습니다."
              }
            </Typography>
          </Stack>

          <Stack css={sx.middle}>
            <video
              css={sx.video}
              src="/assets/rolls.mp4"
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </Stack>

          <Typography
            css={sx.bottom}
            variant="body2"
            data-aos={"fade-down"}
            data-aos-duration="1500"
          >
            {
              "보이지 않는 작은 결점만으로 본래의 쓰임 목적을 상실해버린 분리막 폐기물.\n그러나 폐기물이라고 하기에는 너무 새것의 상태였습니다. 분리막은 폐페트병과 달리 초고분자량 플라스틱(UHMWPE)으로 재활용조차 어려워 그대로 소각되고 있습니다. 우리는 이 고성능의 플라스틱 필름을 다시 빛나게 할 수 있는 무언가를 상상했습니다."
            }
          </Typography>
        </Stack>
      </div>
    </div>
  );
};

const sx = {
  root: css`
    padding: 0 8.333vw;
  `,
  top: css`
    align-items: center;
  `,
  inner: css`
    max-width: 803px;
    margin: 0 auto;
  `,

  head1: css`
    display: flex;
    line-height: 7.667vw;
    align-items: baseline;
    @media ${Mq.sm} {
      margin-bottom: 64px;
    }
  `,
  image: css`
    width: 20vw;
    height: 20vw;
    border-radius: 50%;
    background-color: #fff;
  `,
  imageWrap: css`
    align-items: center;
    position: relative;
    width: 100%;
  `,

  roll1: css`
    position: absolute;
    top: 12vw;
    right: 1vw;
    width: 16vw;
    aspect-ratio: 1;
    @media ${Mq.xl} {
      right: 14vw;
    }
  `,
  roll2: css`
    position: absolute;
    top: -5vw;
    right: -2vw;
    width: 16vw;
    aspect-ratio: 1;
    @media ${Mq.xl} {
      right: 8vw;
    }
  `,
  roll3: css`
    position: absolute;
    top: 5vw;
    left: -10vw;
    width: 16vw;
    aspect-ratio: 1;
    @media ${Mq.xxl} {
      left: -2vw;
    }
    @media (max-width: 1064px) {
      left: 7vw;
    }
  `,
  car: css`
    position: relative;
    width: 50vw;
    height: 22vw;
    animation: car 2s infinite alternate;
    @keyframes car {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(0, 20px);
      }
    }
  `,
  textWrap: css`
    @media ${Mq.xl} {
      /* padding: 0 8.333vw; */
    }
  `,
  title: css`
    margin-top: 15vw;
  `,
  text: css`
    margin: 1vw 0 0 0;
    @media ${Mq.sm} {
      margin: 18px 0 0 0;
      line-height: 36px;
    }
  `,
  middle: css`
    align-items: center;
    height: auto;
    text-align: center;
    word-break: keep-all;
    position: relative;
    margin-top: 150px;
  `,
  video: css`
    /* position: absolute;
    bottom: 0;
    left: 0; */
    width: 100%;
    bottom: -32vw;
  `,

  bottom: css`
    margin-top: 150px;
    line-height: 28px;
    @media ${Mq.sm} {
      line-height: 36px;
    }
  `,
};
