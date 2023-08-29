import type { AppProps } from "next/app";

function RebootAPP({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {`
          body {
            margin: 0;
          }
        `}
      </style>
    </>
  );
}

export default RebootAPP;
