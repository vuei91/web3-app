"use client";
import { useEffect, useState } from "react";
import { useConnect } from "wagmi";

const Profile = () => {
  const [mount, setMount] = useState(false);
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  useEffect(() => setMount(true), []);
  return (
    mount && (
      <div>
        {connectors.map((connector) => (
          <button
            disabled={!connector.ready}
            key={connector.id}
            onClick={() => connect({ connector })}
          >
            {connector.name}
            {!connector.ready && " (unsupported)"}
            {isLoading &&
              connector.id === pendingConnector?.id &&
              " (connecting)"}
          </button>
        ))}

        {error && <div>{error.message}</div>}
      </div>
    )
  );
};

export default Profile;
