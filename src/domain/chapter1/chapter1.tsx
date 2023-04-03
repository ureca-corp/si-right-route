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
            >{`전기차 배터리 핵심 부품 "이차전지 분리막"`}</Typography>
            <Typography css={sx.text} variant="body2">
              {
                "배터리 분리막은 전기차 시장의 활성화와 함께 그 생산량이 급격하게 증가하게 되었습니다.\n친환경 전기차라는 수식어와 다르게 그 뒤단에서는 심각한 환경오염을 유발할 수 있는 막대한 양의 분리막 폐기물이 소각되고 있습니다."
              }
            </Typography>
          </Stack>

          <Stack css={sx.middle} data-aos={"fade-up"} data-aos-duration="2000">
            <video
              css={sx.video}
              src="/assets/rolls.mp4"
              autoPlay
              muted
              loop
            ></video>
          </Stack>

          <Typography
            css={sx.bottom}
            variant="body2"
            data-aos={"fade-down"}
            data-aos-duration="1500"
          >
            {
              "보이지 않는 작은 결점만으로 본래의 쓰임 목적을 상실해버린 분리막 폐기물\n그러나 폐기물이라고 하기에는 너무 새것의 상태였습니다. 분리막은 폐페트병과 달리 초고분자량 플라스틱(UHMWPE) 으로 재활용조차 어려워 그대로 소각되고 있습니다. 우리는 이 고성능의 플라스틱 필름을 다시 빛나게 할 수 있는 무언가를 상상했습니다."
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
    max-width: 1030px;
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
  `,
  //
  roll1: css`
    position: absolute;
    top: 12vw;
    left: 52vw;
    width: 16vw;
    aspect-ratio: 1;
  `,
  roll2: css`
    position: absolute;
    top: -5vw;
    left: 52vw;
    width: 16vw;
    aspect-ratio: 1;
  `,
  roll3: css`
    position: absolute;
    top: 5vw;
    left: -1vw;
    width: 16vw;
    aspect-ratio: 1;
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
      margin: 24px 0 130px 0;
      line-height: 36px;
    }
  `,
  middle: css`
    align-items: center;
    text-align: center;
    word-break: keep-all;
    position: relative;
    margin-top: 5vw;
  `,
  video: css`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    bottom: -32vw;
  `,
  year: css`
    font-family: "Noto Sans KR";
  `,
  red: css`
    color: #e94817;
    /* font-size: 74px !important; */
    font-weight: 700;
    margin-bottom: 1vw;
    @media ${Mq.sm} {
      font-size: 56px !important;
    }
  `,
  battery: css`
    font-size: 16px !important;
    margin-bottom: 1.5vw;
    @media ${Mq.xs} {
      padding: 0 15px;
      margin-bottom: 40px;
    }
  `,
  two: css`
    font-size: 25.997px;
    @media ${Mq.md} {
      font-size: 16px;
    }
  `,
  seperate: css`
    font-size: 10px !important;
  `,
  bottom: css`
    margin-top: 41vw;
    line-height: 28px;
    @media ${Mq.sm} {
      margin: 180px 0 80px 0;
      line-height: 36px;
    }
  `,
};

const ScissorsImage = () => {
  return <div css={sx.image} />;
};
