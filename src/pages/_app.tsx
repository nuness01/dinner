import { type AppType } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { trpc } from "src/utils/trpc";

import Head from "next/head";

import "../styles/globals.css";
import "../styles/calendar.css";
import "../styles/Spinner.css";
import Navbar from "@components/navbar";
import Footer from "@components/footer";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Head>
        <title>Dinner</title>
        <link rel='icon' href='/favicon.ico'/>
      </Head>

      <Navbar />

      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
};

export default trpc.withTRPC(MyApp);
