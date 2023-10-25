"use client";
import React from "react";
import { useAccount, useContractRead } from "wagmi";
import VTokenABI from "@/abi/VTokenABI.json";

const Contract = () => {
  const { address } = useAccount();
  const { data: balanceOf } = useContractRead({
    address: "0xFd59f3889524DbeEEB07233a9eDe612fFAE78cE9",
    abi: VTokenABI,
    functionName: "balanceOf",
    args: [address],
  });
  const { data: decimals } = useContractRead({
    address: "0xFd59f3889524DbeEEB07233a9eDe612fFAE78cE9",
    abi: VTokenABI,
    functionName: "decimals",
  });
  const { data: symbol } = useContractRead({
    address: "0xFd59f3889524DbeEEB07233a9eDe612fFAE78cE9",
    abi: VTokenABI,
    functionName: "symbol",
  });
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
