import { type AppType } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { trpc } from "src/utils/trpc";

import "../styles/globals.css";
import "../styles/calendar.css";
import "../styles/Spinner.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default trpc.withTRPC(MyApp);
