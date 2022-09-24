import type { AppProps } from "next/app";

import App from "../src/components/App";
import AppHeader from "../src/components/AppHeader";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  <>
    <AppHeader />

    <App>
      <Component {...pageProps} />
    </App>
  </>;
}

export default MyApp;
