import type { AppProps } from "next/app";
import { MuiProvider } from "../src/lib";
import { Toaster } from "react-hot-toast";
import "leaflet/dist/leaflet.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MuiProvider>
      <Component {...pageProps} />
      <Toaster />
    </MuiProvider>
  );
};

export default App;
