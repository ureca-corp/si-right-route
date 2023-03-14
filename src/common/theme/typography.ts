import { TypographyOptions } from "@mui/material/styles/createTypography";

export const baseTypographyOptions: TypographyOptions = {
  fontFamily: "Texnic",

  allVariants: {
    whiteSpace: "pre-wrap",
  },
  h1: {
    fontSize: "8.333vw", //160
    fontWeight: 700,
  },
  h2: {
    fontSize: "5.208vw", //100
    fontWeight: "700",
  },
  h3: {
    fontSize: "4.167vw", //80
  },

  h6: {
    fontSize: "1.458vw",
  },
  body1: {
    fontSize: "3.125vw", //60
    fontWeight: "700",
  },
  body2: {
    fontSize: "2.083vw", //40
    fontWeight: "700",
  },
};
