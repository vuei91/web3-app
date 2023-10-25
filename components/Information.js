"use client";
import React from "react";
import {
  useAccount,
  useBalance,
  useBlockNumber,
  useNetwork,
  useToken,
} from "wagmi";

const Informaion = () => {
  const { address, isConnecting, isDisconnected } = useAccount(); // 현재 연결된 지갑의 정보를 가져옴
  const { data: balance } = useBalance({ address });
  const { data: blockNumber } = useBlockNumber();
  const { chain, chains } = useNetwork();
  const { data: token } = useToken({ address: "" });
  if (isConnecting) return <div>Connecting…</div>;
  if (isDisconnected) return <div>Disconnected</div>;
  return (
    <>
      <div>address: {address}</div>
      <div>
        balance : {balance?.formatted} symbol: {balance?.symbol}
      </div>
      <div>blocknumber: {parseInt(blockNumber)}</div>
      <div>chain name: {chain.name}</div>
      {chains && (
        <div>Available chains: {chains.map((chain) => chain.name)}</div>
      )}
      <div>
        token name: {token?.name} {token?.symbol}
      </div>
    </>
  );
};

export default Informaion;
