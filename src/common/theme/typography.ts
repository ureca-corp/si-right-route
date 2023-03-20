import { TypographyOptions } from "@mui/material/styles/createTypography";

export const baseTypographyOptions: TypographyOptions = {
  fontFamily: "Texnic",

  allVariants: {
    whiteSpace: "pre-wrap",
  },
  h1: {
    fontSize: "8.333vw", //160
    fontWeight: 400,
  },
  h2: {
    fontSize: "60px", //100
    fontWeight: "400",
    fontFamily: "Texnic",
  },
  h3: {
    fontSize: "44px",
  },
  h4: {
    fontSize: "3.125vw", //60
    fontWeight: "400",
  },
  h5: {
    fontSize: "32px",
  },
  h6: {
    fontSize: "28px",
  },
  body1: {
    fontSize: "24", //60
    fontWeight: "400",
    fontFamily: "Noto Sans KR",
  },
  body2: {
    fontSize: "18", //40
    fontWeight: "400",
    fontFamily: "Noto Sans KR",
  },
};

export const darkTypographyOptions: TypographyOptions = {
  ...baseTypographyOptions,
  allVariants: {
    whiteSpace: "pre-wrap",
    color: "#fff",
  },
};

export const lightTypographyOptions: TypographyOptions = {
  ...baseTypographyOptions,
  allVariants: {
    whiteSpace: "pre-wrap",
    color: "#222",
  },
};
