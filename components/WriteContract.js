"use client";
import React, { useState } from "react";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import VTokenABI from "@/abi/VTokenABI";

const WriteContract = () => {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState(0);
  const { write: transfer } = useContractWrite({
    address: "0xFd59f3889524DbeEEB07233a9eDe612fFAE78cE9",
    abi: VTokenABI,
    functionName: "transfer",
  });
  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => setAddress(e.target.value)}
          name="address"
          placeholder="address"
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setAmount(e.target.value)}
          name="amount"
          placeholder="amount"
        />
      </div>
      <div>
        <button
          onClick={() => {
            transfer?.({
              args: [address, amount * 1e18],
            });
          }}
        >
          transfer
        </button>
      </div>
    </div>
  );
};

export default WriteContract;
