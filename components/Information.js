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
  // 현재 연결된 지갑의 정보를 가져옴
  const { address, isConnecting, isDisconnected } = useAccount();
  const { data: balance } = useBalance({ address });
  const { data: blockNumber } = useBlockNumber();
  const { chain, chains } = useNetwork();
  const { data: token } = useToken({
    address: "0xFd59f3889524DbeEEB07233a9eDe612fFAE78cE9",
  });
  if (isConnecting) return <div>Connecting…</div>;
  if (isDisconnected) return <div>Disconnected</div>;
  return (
    <>
      <div>
        <strong>address:</strong> {address}
      </div>
      <div>
        <strong>balance :</strong> {balance?.formatted} <strong>symbol:</strong>{" "}
        {balance?.symbol}
      </div>
      <div>
        <strong>blocknumber:</strong> {parseInt(blockNumber)}
      </div>
      <div>
        <strong>chain name:</strong> {chain.name}
      </div>
      {chains && (
        <div>
          <strong>Available chains:</strong> {chains.map((chain) => chain.name)}
        </div>
      )}
      <div>
        <strong>token name:</strong> {token?.name}{" "}
        <strong>token symbol:</strong> {token?.symbol}
      </div>
      <div>
        <strong>token totalSupply:</strong> {token?.totalSupply?.formatted}
      </div>
    </>
  );
};

export default Informaion;
