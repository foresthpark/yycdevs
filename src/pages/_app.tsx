import { type AppType } from "next/dist/shared/lib/utils";

import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
};

export default MyApp;
