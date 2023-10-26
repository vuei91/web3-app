# 정리

# wagmi

### Setup

Config - 설정을 진행함 -> React Hooks를 사용할수 있었음 (useXXX)
\<WagmiConfig config={config}>\</WagmiConfig>

### Connect

지갑과의 연결을 진행 -> 지갑이 바뀔때마다, 지속적으로 같이 바뀌도록 처리가 됨
여러가지 지갑과도 연결이 가능했음
Hooks : useConnect

### Block Information

useAccount, useNetwork, useBlockNumber, useBalance, useToken

### Contract

#### Read

useContractRead - 읽기
address, abi, functionName, args
UseContractReads [다중 조회] - 여러개의 functionName을 사용하여 가져오도록 처리

#### Write

useContractWrite - 쓰기
address, abi, functionName, args
usePrepareContractWrite - config - 사용하는 방법
useContractWrite 사용 - args를 따로 사용하는 방법

#### Event

useContractEvent - log를 확인하여 가져오는 방법
