import type { AppProps } from "next/app";

function RebootAPP({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {`
          html {
            overflow-x: hidden;
          }
          body {
            margin: 0;
            width: 100%;
            overflow-x: hidden;
          }
        `}
      </style>
    </>
  );
}

export default RebootAPP;
