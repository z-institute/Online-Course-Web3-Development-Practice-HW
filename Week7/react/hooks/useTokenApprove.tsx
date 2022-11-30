import { useContractWrite } from "wagmi";
import { useEffect } from "react";
import { utils } from "ethers";
import tokenContractAbi from "../abis/tokenContractAbi.json";
import { tokenAddress, chatroomAddress } from "../constants";

const useTokenApprove = (mintCount: number) => {
  const { writeAsync, status, data } = useContractWrite({
    mode: 'recklesslyUnprepared',
    addressOrName: tokenAddress,
    contractInterface: tokenContractAbi,
    functionName: "approve",
    args: [chatroomAddress, utils.parseEther(mintCount.toString())],
  });

  useEffect(() => {
    if (mintCount) {
      utils.parseEther(mintCount.toString());
    }
  }, [mintCount]);

  return {
    approve: writeAsync,
    status,
    data,
  };
};

export default useTokenApprove;
