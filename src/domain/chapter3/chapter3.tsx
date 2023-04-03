import { ChapterTitle } from "@/common/components/chapterTitle";
import { Stack, Typography } from "@mui/material";
import { css } from "@emotion/react";
import { Mq } from "@/common/theme/screen";
import { CarSeat } from "@/ui/three-models/carSeat/CarSeat";
import { GolfBAg } from "@/ui/three-models/golfBag/GolfBag";
import { MenJacket } from "@/ui/three-models/men_jacket/menJacket";
import { Purse } from "@/ui/three-models/purse/Purse";
import { Chair } from "@/ui/three-models/chair/Chair";
import { Coat } from "@/ui/three-models/coat/Coat";
import recycle from "@/assets/recycle_logo.png";
import Image from "next/image";
import cloth from "@/assets/cloth.png";
import thread1 from "@/assets/thread1.png";
import thread2 from "@/assets/thread2.png";

export const Chapter3 = () => {
  return (
    <div css={sx.root}>
      <div css={sx.inner}>
        <Stack css={sx.top}>
          <Stack css={sx.chaptorWrap}>
            <ChapterTitle numb={3} />
            <Typography css={sx.title} variant="h5">
              무한한 가능성
            </Typography>
          </Stack>
          <Stack css={sx.oneOfaKindWrap}>
            <Stack
              css={sx.textWrap}
              data-aos={"fade-up"}
              data-aos-duration="2000"
            >
              <Typography variant="h6">One-of-a-Kind</Typography>
              <Typography variant="h1">RECYCLED</Typography>
              <Typography variant="h2">Functional</Typography>
              <Typography variant="h1">MATERIAL</Typography>
            </Stack>
            <MaterialImage />
          </Stack>
        </Stack>
        <Typography
          css={sx.text1}
          variant="body2"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          {
            "텍스닉 섬유 소재는 재활용이 어려운 폐 배터리 분리막을 부가가치 높은 제품으로 개발한 최초 사례입니다.\n텍스닉이 재활용하지 않았다면 소각되어 환경오염을 유발하는 폐 분리막이 텍스닉의 기술을 만나\n탄소 배출이 저감되는 기능성 리사이클 소재로 재탄생하였습니다. 자원의 수명을 연장한 친환경 소재이면서도 방수-투습, 경량성, 내구성이 우수한 기능성 소재입니다"
          }
        </Typography>
        <div css={sx.ImageWrap}>
          <div css={sx.recycle}>
            <Image src={recycle} alt="recycle" fill sizes="100" />
          </div>
          <div css={sx.cloth}>
            <Image src={cloth} alt="cloth" fill sizes="100" />
          </div>
          <div css={sx.thread1}>
            <Image src={thread1} alt="thread" fill sizes="100" />
          </div>
          <div css={sx.thread2}>
            <Image src={thread2} alt="thread" fill sizes="100"></Image>
          </div>
          <div css={sx.thread3}>
            <Image src={thread2} alt="thread" fill sizes="100"></Image>
          </div>
        </div>
        <Typography
          css={sx.text2}
          variant="body2"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          {
            "현재에서 멈추지 않고 폐 배터리 분리막을 다양한 형태로 개발하기 위해 우리는 끊임없이 도전합니다.\n패션 제품부터 아웃도어, 인테리어, 자동차 시트까지 다양한 분야로 전개 가능한 놀라운 확장성을 갖춘\nNEW RECYCLING SOLUTION,TEXNIC®의 행보를 지켜봐 주세요."
          }
        </Typography>
        <Stack css={sx.bottom}>
          <div css={sx.carSeat}>
            <CarSeat />
          </div>
          <div css={sx.golfBag}>
            <GolfBAg />
          </div>
          <div css={sx.menJacket}>
            <MenJacket />
          </div>
          <div css={sx.purse}>
            <Purse />
          </div>
          <div css={sx.chair}>
            <Chair />
          </div>
          <div css={sx.coat}>
            <Coat />
          </div>
          <Typography
            variant="body1"
            css={sx.text3}
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            {
              "우리가 함께 살아가는 플래닛 지구를 위해,\n텍스닉 만의 방식으로 고정관념을 깨고 움츠린 가능성의 한계를 넘어 혁신적인 리사이클 솔루션을  제시해나갈 것입니다."
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
  inner: css`
    max-width: 1030px;
    margin: 0 auto;
  `,
  chaptorWrap: css`
    align-items: center;
  `,
  top: css`
    align-items: center;
  `,
  titleWrap: css`
    text-align: center;
  `,
  title: css`
    display: flex;
    line-height: 7.667vw;
    align-items: baseline;
    margin-top: 2vw;
  `,
  oneOfaKindWrap: css`
    margin-top: 5vw;
    position: relative;
  `,
  textWrap: css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    align-items: center;
    justify-content: center;
  `,

  materialImage: css`
    width: 52.083vw;
    height: 36.458vw;
    background-color: #ccc;
    position: relative;
    @media ${Mq.sm} {
      width: 80.083vw;
      height: 71.458vw;
    }
  `,
  text1: css`
    margin-top: 9vw;
    line-height: 32px;
    margin-bottom: 9vw;
  `,
  text2: css`
    margin: 9vw 0 0 0;
  `,
  ImageWrap: css`
    display: flex;
    justify-content: center;
    width: 100%;
    position: relative;
  `,
  recycle: css`
    position: relative;
    width: 43vw;
    height: 24vw;
    animation: spin 5.5s infinite linear;
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `,

  cloth: css`
    width: 18vw;
    height: 12vw;
    position: absolute;
    top: 7vw;
    left: 8vw;
    animation: carSeat 1.5s infinite linear alternate;
    @keyframes carSeat {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(0, 25px);
      }
    }
  `,
  thread1: css`
    width: 10vw;
    height: 11vw;
    position: absolute;
    top: 0;
    right: 12vw;

    animation: thread1 1.7s infinite linear alternate;
    @keyframes thread1 {
      0% {
        transform: rotate(15deg) translate(0, 0);
      }
      100% {
        transform: rotate(15deg) translate(0, 20px);
      }
    }
  `,
  thread2: css`
    width: 10vw;
    height: 10.5vw;
    position: absolute;
    top: 12vw;
    right: 12vw;
    /* transform: rotate(-15deg); */
    z-index: 5;
    animation: thread2 2.5s infinite linear alternate;
    @keyframes thread2 {
      0% {
        transform: rotate(-15deg) translate(0, 0);
      }
      100% {
        transform: rotate(-15deg) translate(0, 25px);
      }
    }
  `,
  thread3: css`
    width: 8vw;
    height: 9vw;
    position: absolute;
    top: 8vw;
    right: 9vw;
    z-index: 0;
    animation: thread3 2.5s infinite linear alternate;
    @keyframes thread3 {
      0% {
        transform: rotate(15deg) translate(0, 0);
      }
      100% {
        transform: rotate(15deg) translate(0, 25px);
      }
    }
  `,

  bottom: css`
    align-items: center;
    margin-top: 15vw;
    position: relative;
  `,
  carSeat: css`
    position: absolute;
    right: 25vw;
    top: 11vw;
    width: 27vw;
    aspect-ratio: 1;
    animation: carSeat 2s infinite alternate;
    @keyframes carSeat {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(0, 20px);
      }
    }
  `,

  golfBag: css`
    position: absolute;
    left: 20vw;
    top: 7vw;
    width: 35vw;
    aspect-ratio: 1;
    animation: carSeat 1.5s infinite alternate;
    @keyframes carSeat {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(0, 20px);
      }
    }
  `,
  menJacket: css`
    position: absolute;
    left: 12vw;
    top: -5vw;
    width: 20vw;
    aspect-ratio: 1;
    animation: carSeat 1.5s infinite alternate;
    @keyframes carSeat {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(0, 20px);
      }
    }
  `,
  purse: css`
    position: absolute;
    left: 32vw;
    top: -15vw;
    width: 30vw;
    aspect-ratio: 1;
    animation: carSeat 1.5s infinite alternate;
    @keyframes carSeat {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(0, 20px);
      }
    }
  `,
  chair: css`
    position: absolute;
    right: 21vw;
    top: -5vw;
    width: 18vw;
    aspect-ratio: 1;
    animation: carSeat 1.5s infinite alternate;
    @keyframes carSeat {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(0, 20px);
      }
    }
  `,
  coat: css`
    position: absolute;
    right: -4vw;
    top: 3vw;
    width: 48vw;
    aspect-ratio: 1;
    animation: carSeat 1.7s infinite alternate;
    @keyframes carSeat {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(0, 20px);
      }
    }
  `,
  text3: css`
    text-align: center;
    margin-top: 37vw;
    line-height: 50px;
    @media ${Mq.xs} {
      padding: 0 16px;
      font-size: 18px;
    }
  `,
};

const MaterialImage = () => {
  return <div css={sx.materialImage} />;
};
