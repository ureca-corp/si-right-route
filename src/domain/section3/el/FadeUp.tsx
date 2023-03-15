import { css } from "@emotion/react";
import { ReactNode } from "react";

type FadeUpProps = {
  children: ReactNode;
};

export const FadeUp = ({ children }: FadeUpProps) => {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
      `}
      data-aos={"fade-up"}
    >
      {children}
    </div>
  );
};
