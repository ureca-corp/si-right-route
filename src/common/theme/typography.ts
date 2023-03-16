import { TypographyOptions } from "@mui/material/styles/createTypography";

export const baseTypographyOptions: TypographyOptions = {
  fontFamily: "Texnic",

  allVariants: {
    whiteSpace: "pre-wrap",
    color: "#fff",
  },
  h1: {
    fontSize: "8.333vw", //160
    fontWeight: 400,
  },
  h2: {
    fontSize: "5.208vw", //100
    fontWeight: "700",
  },
  h3: {
    fontSize: "4.167vw", //80
  },
  h4: {
    fontSize: "3.125vw", //60
    fontWeight: "400",
  },

  h6: {
    fontSize: "1.458vw",
  },
  body1: {
    fontSize: "3.125vw", //60
    fontWeight: "400",
    fontFamily: "Noto Sans KR",
  },
  body2: {
    fontSize: "2.083vw", //40
    fontWeight: "400",
    fontFamily: "Noto Sans KR",
  },
};
