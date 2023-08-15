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
  uri: process.env.NEXT_PUBLIC_APOLO_CL!,
});
const { chains, publicClient } = configureChains(
  [sepolia, goerli],
  [
    infuraProvider({
      apiKey: process.env.NEXT_PUBLIC_INFURA_API!,
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
