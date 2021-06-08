import { ChakraProvider } from "@chakra-ui/react";
import AppBar from "../components/AppBar";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AppBar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
