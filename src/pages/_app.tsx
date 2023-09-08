import { type AppType } from "next/dist/shared/lib/utils";

import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Head>
        <title>YYC Devs | Find the talent you need, locally.</title>
        <meta
          name="description"
          content="Find the right developer for you, right here in Calgary"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
};

export default MyApp;
