import { findTheme, ThemeTypes } from "@/common/theme/customTheme";
import "@/common/styles/globals.css";
import { ThemeProvider } from "@mui/system";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={findTheme(ThemeTypes.Light)}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
