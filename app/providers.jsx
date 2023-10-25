"use client";
import React, { useEffect, useState } from "react";
import {
  WagmiConfig,
  createConfig,
  configureChains,
  sepolia,
  mainnet,
} from "wagmi";
import { publicProvider } from "wagmi/providers/public";

// connectors
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

const { chains, publicClient } = configureChains(
  [mainnet, sepolia],
  [publicProvider()]
);

const config = createConfig({
  publicClient,
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: "e72f727f24a0188d8b820164bfc49747", // wallet connector에 가입 후 프로젝트를 생성하여 그 ID를 넣어야함
      },
    }),
    new InjectedConnector({ chains }),
  ],
});

const Providers = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return <WagmiConfig config={config}>{mounted && children}</WagmiConfig>;
};

export default Providers;
