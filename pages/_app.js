import React from "react";
import { IntlProvider } from "react-intl";
import { ThemeProvider } from "styled-components";
import { theme } from "styles";
import translations from "translations";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  const lang = "en";
  return (
    <ThemeProvider theme={theme}>
      <IntlProvider locale={lang} messages={translations[lang]}>
        <Component {...pageProps} />
      </IntlProvider>
    </ThemeProvider>
  );
}

export default MyApp;
