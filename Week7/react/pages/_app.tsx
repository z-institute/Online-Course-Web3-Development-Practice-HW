import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import Nav from "../components/Nav";

import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
// pages/home.js
import NonSSRWrapper from "../components/noSSRWrapper";

const theme = extendTheme({
  colors: {
  },
})

const ALCHEMY_PROVIDER_API_KEY = "Da-2Ot_PmvmISYkxe74ryRO_uQ8fo6VJ";

const { chains, provider } = configureChains(
  [chain.goerli],
  [alchemyProvider({ apiKey: ALCHEMY_PROVIDER_API_KEY }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit App',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NonSSRWrapper>
      <ChakraProvider theme={theme}>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains} initialChain={chain.goerli}>
            <Nav></Nav>
            <Component {...pageProps} />
          </RainbowKitProvider>
        </WagmiConfig>
      </ChakraProvider>
    </NonSSRWrapper>
  );
}

export default MyApp;
