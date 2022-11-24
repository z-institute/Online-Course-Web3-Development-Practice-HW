import { useAccount, useContractWrite } from "wagmi";
import { useEffect } from "react";
import { utils } from "ethers";
import tokenContractAbi from "../../abis/myTokenAbi.json";
import { tokenAddress, chatroomAddress } from "../../constants";

const useIncreaseAllowance = (mintCount: number) => {
  const { address } = useAccount();
  const {
    writeAsync,
    status: increaseStatus,
    data,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    address: tokenAddress,
    abi: tokenContractAbi,
    functionName: "increaseAllowance",
    chainId: 5,
    args: [address, utils.parseEther(mintCount.toString())],
  });

  useEffect(() => {
    if (mintCount) {
      utils.parseEther(mintCount.toString());
    }
  }, [mintCount]);

  return {
    increaseAllowance: writeAsync,
    increaseStatus,
    data,
  };
};

export default useIncreaseAllowance;
