import { ChapterTitle } from "@/common/components/chapterTitle";
import { Mq } from "@/common/theme/screen";
import { css, Stack, Typography } from "@mui/material";
import "aos/dist/aos.css";

export const Chapter2 = () => {
  return (
    <div>
      <Stack css={sx.root}>
        <Stack css={sx.inner}>
          <div css={sx.textContainer}>
            <ChapterTitle numb={2} />
            <Typography css={sx.title} variant="h5">
              우리만의 길
            </Typography>
          </div>

          <Stack
            css={sx.textWrap}
            data-aos={"fade-down"}
            data-aos-duration="1500"
          >
            <Typography variant="h5">
              {`World's First\n배터리 분리막 리사이클 신소재 , TEXNIC`}
              <sup css={sx.sup}>®</sup>
            </Typography>
            <Typography css={sx.text} variant="body2">
              {
                "그동안 분리막을 재활용하려는 시도는 있었으나 대부분 실패했습니다.\n그래서 우리는 완전히 새로운 방식으로 다가갔습니다. 패션 산업에 있던 우리는 분리막을 섬유 소재로 재활용 할 수 있는 방법을 연구했습니다. 그 결과 분리막의 핵심 기능을 헤치지 않는 새로운 기능성 원단으로서의 가능성을 발견했습니다."
              }
            </Typography>
          </Stack>
          <Stack css={sx.imageWrap}>
            <video
              css={sx.video}
              src="/assets/ch2_video.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </Stack>
          <Stack
            css={sx.textWrap}
            data-aos={"fade-down"}
            data-aos-duration="1500"
          >
            <Typography css={sx.bottomText} variant="body2">
              {`우리는 수거한 폐 분리막을 성능별로 나누고 가공하여 섬유 소재로 만들 수 있는 독자적인 특허 기술 개발에 성공하였고, 배터리 분리막 리사이클 소재인 TEXNIC`}
              <sup css={sx.sup2}>®</sup>
              {`을 '세계 최초'로 선보일 수 있었습니다.\n우리의 기술이 특별한 이유는 배터리 분리막 고유의 미세기공을 헤치지 않는 혁신 기술이면서, 수거한 폐 분리막을 100% 활용해 추가 폐기물이 없고 재활용 공정에서 물과 화학물질을 사용하지 않는 친환경 재활용 기술이기 때문입니다.`}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

const sx = {
  root: css`
    align-items: center;
    margin-top: 300px;
    padding: 0 8.333vw;
    @media ${Mq.sm} {
      margin-top: 186px;
    }
  `,
  inner: css`
    max-width: 803px;
    margin: 0 auto;
  `,
  textContainer: css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  title: css`
    line-height: 7.667vw;
    margin-bottom: 5vw;
    @media ${Mq.sm} {
      margin-bottom: 56px;
    }
  `,

  jobs: css`
    width: 32.083vw;
    height: 26.458vw;
    background-color: #fff;
  `,
  textWrap: css``,
  sup: css`
    line-height: 30px;
    margin-left: 4px;
    @media ${Mq.sm} {
      line-height: 21px;
    }
  `,
  imageWrap: css`
    display: flex;
    align-items: center;
  `,
  video: css`
    width: 100%;
  `,
  text: css`
    margin: 1.2vw 0 150px 0;
    line-height: 32px;
    @media ${Mq.sm} {
      margin: 24px 0 56px 0;
    }
  `,
  bottomText: css`
    margin: 150px 0 300px 0;
    line-height: 32px;
    @media ${Mq.sm} {
      margin: 56px 0 186px 0;
    }
  `,

  sup2: css`
    line-height: 25px;
  `,
};
