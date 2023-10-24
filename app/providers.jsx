"use client";
import React, { useEffect, useState } from "react";
import { WagmiConfig, createConfig, configureChains, sepolia } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains([sepolia], [publicProvider()]);

const config = createConfig({
  publicClient,
  autoConnect: true,
  connectors: [new InjectedConnector({ chains })],
});

const Providers = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return <WagmiConfig config={config}>{mounted && children}</WagmiConfig>;
};

export default Providers;
