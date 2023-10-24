"use client";
import Profile from "@/components/Profile";
import React from "react";
import { WagmiConfig, createConfig, configureChains, mainnet } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains([mainnet], [publicProvider()]);

const config = createConfig({
  publicClient,
  autoConnect: true,
  connectors: [new InjectedConnector({ chains })],
});

const Home = () => {
  return (
    <WagmiConfig config={config}>
      <Profile />
    </WagmiConfig>
  );
};

export default Home;
