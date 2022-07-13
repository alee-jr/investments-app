import type { AppProps } from "next/app";
import theme from "../theme";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../../apollo-client";
import { GlobalStyles } from "../theme/globalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default MyApp;
