import "@styles/globals.scss";
import type { AppProps } from "next/app";

function RebootAPP({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default RebootAPP;
