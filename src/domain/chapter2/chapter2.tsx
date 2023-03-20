import { ChapterTitle } from "@/common/components/chapterTitle";
import { css, Stack, Typography } from "@mui/material";
import "aos/dist/aos.css";

export const OneofaKind = () => {
  return (
    <div>
      <Stack css={sx.root}>
        <div css={sx.textContainer} data-aos={"fade-up"}>
          <ChapterTitle numb={2} />
          <Typography css={sx.title} variant="h5">
            우리만의 길
          </Typography>
        </div>

        <RecycleImage />
      </Stack>
      <Stack css={sx.textWrap}>
        <Typography
          css={sx.bottomTitle}
          variant="h5"
        >{`전기차 배터리 핵심 부품 "이차전지 분리막"`}</Typography>
        <Typography css={sx.text} variant="body2" data-aos={"fade-up"}>
          {
            "배터리 분리막은 전기차 시장의 활성화와 함께 그 생산량이 급격하게 증가하게 되었습니다.\n친환경 전기차라는 수식어와 다르게 그 뒤단에서는 심각한 환경오염을 유발할 수 있는 막대한 양의 분리막 폐기물이 소각되고 있습니다."
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
    padding-left: 8.333vw;
  `,
  bottomTitle: css`
    margin: 7vw 0 0 0;
  `,
  text: css`
    margin: 1.2vw 0 12.833vw 0;
  `,
};

const RecycleImage = () => {
  return <div css={sx.jobs} data-aos="fade-left" data-aos-easing="linear" />;
};
