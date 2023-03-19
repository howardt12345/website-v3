import type { AppProps } from 'next/app';
import React, { useState, useEffect } from 'react';
import ThemeProvider from '@api/ThemeProvider';
import { GlobalStyle } from '@styles';

const App = ({ Component, pageProps }: AppProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ThemeProvider>
      <GlobalStyle />
      {isMounted && <Component {...pageProps} />}
    </ThemeProvider>
  );
};

export default App;
