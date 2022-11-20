import { useContractWrite } from "wagmi";
import { useEffect } from "react";
import { utils } from "ethers";
import tokenContractAbi from "../../abis/myTokenAbi.json";
import { tokenAddress, chatroomAddress } from "../../constants";

const useApprove = (amount: number) => {
  const value = utils.parseEther(amount.toString()) || "0";
  const {
    writeAsync,
    status: statusApprove,
    data,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    address: tokenAddress,
    abi: tokenContractAbi,
    functionName: "approve",
    args: [chatroomAddress, value],
  });

  useEffect(() => {
    if (amount) {
      utils.parseEther(amount.toString());
    }

  }, [amount]);

  return {
    approve: writeAsync,
    statusApprove,
    data,
  };
};

export default useApprove;
