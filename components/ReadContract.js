"use client";
import React from "react";
import { useAccount, useContractReads } from "wagmi";
import VTokenABI from "@/abi/VTokenABI.json";

const VTokenContract = {
  address: "0xFd59f3889524DbeEEB07233a9eDe612fFAE78cE9",
  abi: VTokenABI,
};

const Contract = () => {
  const { address } = useAccount();
  const { data, isLoading } = useContractReads({
    contracts: [
      { ...VTokenContract, functionName: "balanceOf", args: [address] },
      { ...VTokenContract, functionName: "decimals" },
      { ...VTokenContract, functionName: "symbol" },
    ],
  });
  if (isLoading) return null;
  const [{ result: balanceOf }, { result: decimals }, { result: symbol }] =
    data;
  return (
    <div>
      <div style={{ borderTop: "1px solid", margin: "10px 0" }}></div>
      <h1>Contract</h1>
      <p>
        <strong>Address:</strong> {address}
      </p>
      <p>
        <strong>BalanceOf :</strong>
        {(parseInt(balanceOf) / 10 ** decimals).toLocaleString()} {symbol}
      </p>
    </div>
  );
};

export default Contract;
