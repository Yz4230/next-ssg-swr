import styled from "@emotion/styled";

import "../styles/globals.css";

import type { AppProps } from "next/app";

const Page = styled.div({
  maxWidth: "980px",
  margin: "0 auto",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;
