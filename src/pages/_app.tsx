import { type AppType } from "next/dist/shared/lib/utils";

import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
