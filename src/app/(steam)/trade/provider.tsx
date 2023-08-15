'use client';
import { createConfig, WagmiConfig } from 'wagmi';
import { configureChains } from '@wagmi/core';
import { infuraProvider } from 'wagmi/providers/infura';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { sepolia, goerli } from '@wagmi/core/chains';
import '@rainbow-me/rainbowkit/styles.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { NotificationProvider } from 'web3uikit';
import { getDefaultWallets, RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:4000/graphql',
});
const { chains, publicClient } = configureChains(
  [sepolia, goerli],
  [
    infuraProvider({
      apiKey: '152b456aa5d44ab3a7a18b287dfc9295',
    }),
    jsonRpcProvider({
      rpc: () => ({ http: 'HTTP://127.0.0.1:7545' }),
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'steam-dashboard',
  chains,
});

const wagmiClient = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={client}>
      <NotificationProvider>
        <WagmiConfig config={wagmiClient}>
          <RainbowKitProvider chains={chains} theme={darkTheme()} coolMode>
            {children}
          </RainbowKitProvider>
        </WagmiConfig>
      </NotificationProvider>
    </ApolloProvider>
  );
}
