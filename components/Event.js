"use client";
import React, { useState } from "react";
import VTokenABI from "@/abi/VTokenABI";
import { useContractEvent } from "wagmi";

const Event = () => {
  const [eventData, setEventData] = useState({});
  useContractEvent({
    address: "0xFd59f3889524DbeEEB07233a9eDe612fFAE78cE9",
    abi: VTokenABI,
    eventName: "Transfer",
    listener(log) {
      const [data] = log;
      const eventName = data.eventName;
      const { from, to, value } = data.args;
      setEventData({ ...eventData, eventName, from, to, value });
      alert("트랜잭션 성공");
    },
  });
  return (
    <div>
      <h1>Event Name: {eventData?.eventName}</h1>
      <p>
        <strong>From:</strong> {eventData?.from}
      </p>
      <p>
        <strong>To:</strong> {eventData?.to}
      </p>
      <p>
        <strong>Value:</strong>{" "}
        {(BigInt(eventData?.value || 0n) / BigInt(1e18)).toLocaleString()}
      </p>
    </div>
  );
};

export default Event;
