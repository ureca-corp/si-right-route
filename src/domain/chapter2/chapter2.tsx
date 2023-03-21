import { ChapterTitle } from "@/common/components/chapterTitle";
import { Mq } from "@/common/theme/screen";
import { css, Stack, Typography } from "@mui/material";
import "aos/dist/aos.css";

export const Chapter2 = () => {
  return (
    <div>
      <Stack css={sx.root}>
        <div css={sx.textContainer}>
          <ChapterTitle numb={2} />
          <Typography css={sx.title} variant="h5">
            우리만의 길
          </Typography>
        </div>

        <RecycleImage />
      </Stack>
      <Stack css={sx.textWrap} data-aos={"fade-down"} data-aos-duration="1500">
        <Typography
          css={sx.bottomTitle}
          variant="h5"
        >{`World's First 배터리 분리막 리사이클 신소재`}</Typography>
        <Typography css={sx.text} variant="body2">
          {
            "우리만의 방식으로 아이디어를 연구하고 테스트한 결과,\n독자적인 재활용 기술 개발에 성공하였고, 배터리 분리막 리사이클 기능성 섬유 제품을'세계 최초로'선보일 수 있었습니다.\n우리의 기술이 특별한 이유는 배터리 분리막 고유의 미세기공을 헤치지 않는 혁신 기술이며, 수거한 폐 분리막을 100% 사용할 수 있는 친환경 재활용 기술이기 때문입니다"
          }
        </Typography>
      </Stack>
    </div>
  );
};

const sx = {
  root: css`
    align-items: center;
    margin-top: 12vw;
  `,
  textContainer: css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  title: css`
    margin-top: 2vw;
    margin-bottom: 7vw;
  `,

  jobs: css`
    width: 32.083vw;
    height: 26.458vw;
    background-color: #fff;
  `,
  textWrap: css`
    padding: 0 8.333vw;
  `,
  bottomTitle: css`
    margin: 11vw 0 0 0;
  `,
  text: css`
    margin: 1.2vw 0 12.833vw 0;
    line-height: 32px;
    @media ${Mq.sm} {
      margin: 24px 0 130px 0;
    }
  `,
};

const RecycleImage = () => {
  return <div css={sx.jobs} data-aos="fade-left" data-aos-easing="linear" />;
};
