import type { AppProps } from "next/app";

function RebootAPP({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      {/**
       * html, body에 overflow-x: hidden을 사용하고
       * 스크린 css에 position: sticky를 사용하면
       * sticky가 작동하지 않는다.
       * 이를 해결하기 위해 overflow-x: clip을 사용한다.
       * //참고자료: https://www.terluinwebdesign.nl/en/css/position-sticky-not-working-try-overflow-clip-not-overflow-hidden/
       */}
      <style jsx global>
        {`
          html {
            overflow-x: clip;
          }
          body {
            margin: 0;
            width: 100%;
            overflow-x: clip;
          }
        `}
      </style>
    </>
  );
}

export default RebootAPP;
