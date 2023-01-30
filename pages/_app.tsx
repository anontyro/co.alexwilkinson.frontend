import "../styles/globals.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { makeServer } from "../src/testing/mockServer/mirage";
import Head from "next/head";

const queryClient = new QueryClient();

// TODO: renable this when it is required later on
// if (process.env.NODE_ENV === "development") {
//   makeServer({ environment: "development" });
// }

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Alexwilkinson.co</title>
        <meta name="description" content="my place to be" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
