import { Flowbite, Spinner } from "flowbite-react";
import { AppProps } from "next/app";
import { FC, Suspense } from "react";
import "../styles/globals.css";

const App: FC<AppProps> = function ({ Component, pageProps }): JSX.Element {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center">
          <Spinner size="lg" /> Loading..
        </div>
      }
    >
      <Flowbite>
        <Component {...pageProps} />
      </Flowbite>
    </Suspense>
  );
};

export default App;
