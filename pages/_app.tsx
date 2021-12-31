import { AppProps } from "next/app";
import React from "react";
import ThemeProvider from "@api/ThemeProvider";
import { GlobalStyle } from "@styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
