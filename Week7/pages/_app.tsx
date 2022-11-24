import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Nav from "../components/Nav";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const { chains, provider, webSocketProvider } = configureChains(
  [
    chain.mainnet,
    chain.polygon,
    chain.optimism,
    chain.arbitrum,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true"
      ? [chain.goerli]
      : []),
  ],
  [
    alchemyProvider({
      // This is Alchemy's default API key.
      // You can get your own at https://dashboard.alchemyapi.io
      apiKey: "BPrm4G6tjJ2sbga8i1cN0cKBIbaJ8swc",
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <Head>
            <link
              rel="icon"
              type="image/png"
              sizes="96x96"
              href="https://warehouse.kaik.network/school/favicon/d9887f6b-03a2-4543-83cf-4c38d5be61e4/8663666c-3162-437a-a749-4e2a9e6824e1.png"
            ></link>
            <title>7th-Week-HW-Dhal</title>
            <meta
              name="description"
              content="Generated by @rainbow-me/create-rainbowkit"
            />
          </Head>
          <Nav></Nav>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  );
}

export default MyApp;