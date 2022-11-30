import type { AppProps } from "next/app";
import { MuiProvider } from "../src/lib";
import { Toaster } from "react-hot-toast";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MuiProvider>
      <Component {...pageProps} />
      <Toaster />
    </MuiProvider>
  );
};

export default App;
