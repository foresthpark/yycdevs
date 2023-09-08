import HeroBanner from "@/components/HeroBanner";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>YYC Devs | Find the talent you need, locally.</title>
        <meta
          name="description"
          content="Find the right developer for you, right here in Calgary"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroBanner />
    </>
  );
}
