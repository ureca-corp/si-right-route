import { ReactNode } from "react";

import { css } from "@emotion/react";

import { useRoundCarousel } from "./UseRoundCarousel";

type CustomRoundCarouselProps = {
  items: ReactNode[];
  speed?: number;
};

export const CustomRoundCarousel = ({
  items,
  speed = 2.5,
}: CustomRoundCarouselProps) => {
  const dataSource = items;

  const { containerRef, anchorRef, targetsRefArray } = useRoundCarousel(
    dataSource.length,
    speed
  );

  return (
    <div ref={containerRef} css={st.root}>
      <div css={st.inner}>
        <div ref={anchorRef} css={st.anchor}></div>

        {dataSource.map((it, index) => {
          return (
            <div
              key={index}
              ref={(el) => (targetsRefArray.current[index] = el)}
              css={st.itemWrapper}
            >
              {it}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const st = {
  root: css`
    position: relative;
    width: 100%;
    height: 100%;
  `,
  inner: css`
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    perspective: 2500px;
    transform-style: preserve-3d;
  `,
  anchor: css`
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 4px;
    height: 4px;
  `,
  itemWrapper: css`
    position: absolute;

    transform-origin: 50% 50%;
    transition: all 0.2s ease-out;

    transform-style: preserve-3d;
  `,
};
