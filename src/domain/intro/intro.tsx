import { Stack, Typography } from "@mui/material";
import { css } from "@emotion/react";
import { Mq } from "@/common/theme/screen";

export const Intro = () => {
  return (
    <div css={sx.root}>
      <Typography css={sx.aboutUs} variant="body1">
        {"ABOUT US"}
      </Typography>
      <Stack css={sx.textWrap} data-aos={"fade-up"} data-aos-duration="2000">
        <Typography css={sx.head2} variant="h2">
          {"미래를 위한 새로운 쓰임새를 찾다."}
        </Typography>
        <Typography css={sx.body} variant="body1">
          {
            "우리가 배터리 분리막을 재활용하게 된 계기는 단순합니다.\n배터리 분리막은 고성능의 플라스틱(초고분자량 폴리에탈렌)이지만 막간의 결점만으로 불량품 처리되어 불태워지거나 버려지는 것이\n너무 안타까웠기 때문입니다. 그리고 이에 따라 발생하는 환경오염에 대한 잠재적 심각성을 인지했습니다. 그래서 우리는\n첨단소재 기술이 담긴 고성능 배터리 분리막 본연의 기능을 훼손하지 말고 가치 있게 사용할 수 있도록 새로운 생명을\n불어넣어 줄 수 있는 최적의 방법을 모색했습니다."
          }
        </Typography>
      </Stack>
    </div>
  );
};

const sx = {
  root: css`
    padding: 8.333vw 8.333vw 0 8.333vw;
  `,
  aboutUs: css`
    font-weight: 700;
  `,
  textWrap: css``,
  head2: css`
    font-family: Texnic;
    margin-top: 5vw;
  `,
  body: css`
    margin-bottom: 19.833vw;
    margin-top: 2vw;
    line-height: 40px;
    @media ${Mq.xs} {
      font-size: 18px;
    }
  `,
};
