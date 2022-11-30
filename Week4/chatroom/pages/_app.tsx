import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import NonSSRWrapper from '../pages/NonSSRWrapper';

const ALCHEMY_PROVIDER_API_KEY = "Da-2Ot_PmvmISYkxe74ryRO_uQ8fo6VJ";

const { chains, provider } = configureChains(
  [chain.goerli],
  [alchemyProvider({ apiKey: ALCHEMY_PROVIDER_API_KEY }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'Home Work 5',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <NonSSRWrapper>
          <Component {...pageProps} />
        </NonSSRWrapper>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
