import { findTheme, ThemeTypes } from "@/common/theme/customTheme";
import { ThemeProvider } from "@mui/system";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Aos from "aos";

import "@/common/styles/globals.css";
import "aos/dist/aos.css";
import "swiper/css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init();
  });

  return (
    <ThemeProvider theme={findTheme(ThemeTypes.Dark)}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
