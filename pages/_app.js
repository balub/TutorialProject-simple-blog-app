import { ChakraProvider } from "@chakra-ui/react";
import AppBar from "../components/AppBar";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <AppBar />
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
