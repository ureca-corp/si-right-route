import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Color } from "./colors";
import { ScreenType } from "./screen";
import { baseTypographyOptions } from "./typography";

export const lightTheme = createTheme({
  typography: baseTypographyOptions,
  breakpoints: {
    values: {
      xs: 0,
      sm: ScreenType.sm + 1,
      md: ScreenType.md + 1,
      lg: ScreenType.lg + 1,
      xl: ScreenType.xl + 1,
    },
  },
  palette: {
    primary: {
      main: Color.Secondary1,
    },
    secondary: {
      main: Color.TextColor2,
      contrastText: Color.TextColor2,
    },
  },
  components: {
    MuiIcon: {
      styleOverrides: {
        fontSizeLarge: {
          fontSize: "32px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        sizeMedium: {
          padding: "11px 34px",
          // color: Color.TextColor1,
          // backgroundColor: Color.Secondary1,
          borderRadius: "12px",
          // "&:hover": {
          //   backgroundColor: Color.Secondary2,
          // },
        },
      },
    },
  },
});

export enum ThemeTypes {
  Light,
  Dark,
}

export const findTheme = (theme: ThemeTypes) => {
  switch (theme) {
    default:
      return responsiveFontSizes(lightTheme);
  }
};
