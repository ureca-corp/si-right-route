import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";

export const SlideSection = () => {
  return (
    <div>
      <Swiper
        loop={true}
        slidesPerView={4}
        spaceBetween={30}
        modules={[Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Stack>
            <Battery1 />
            <Battery2 />
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Stack>
            <Battery1 />
            <Battery2 />
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Stack>
            <Battery1 />
            <Battery2 />
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Stack>
            <Battery1 />
            <Battery2 />
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Stack>
            <Battery1 />
            <Battery2 />
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Stack>
            <Battery1 />
            <Battery2 />
          </Stack>
        </SwiperSlide>
      </Swiper>

      <Typography css={sx.body} variant="body2">
        고기술로 만들어진 이차전지 분리막은{"\n"}작은 스크래치에도 민감하여 높은
        품질 기준을 가지고 있습니다.{"\n\n"} 사용기준 미달의 배터리 분리막을
        새롬게 활용한다면{"\n"}그대로 폐기하여 자원을 낭비하거나 환경을
        오염시키지 않고{"\n"}우리의 일상을 채워 줄 새로운 무언가로{"\n"}
        재탄생시킬 수 있지 않을까 고민했습니다.
      </Typography>
    </div>
  );
};

const sx = {
  battery1: css`
    width: 13.542vw;
    aspect-ratio: 1;
    background-color: #fff;
    border-radius: 50%;
  `,
  battery2: css`
    width: 14.583vw;
    height: 8.854vw;
    background-color: #fff;
  `,
  body: css`
    text-align: center;
    padding: 20.833vw 0;
  `,
};

const Battery1 = () => {
  return <div css={sx.battery1} />;
};

const Battery2 = () => {
  return <div css={sx.battery2} />;
};
