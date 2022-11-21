import { useContractWrite } from "wagmi";
import { chatRoomAddress, tokenAddress } from "../constants/index";
import tokenContractABI from "../abis/tokenContractABI.json";
import { utils } from "ethers";

const useTokeApprove = (approveAmount: number) => {
  // console.log(mintCount);
  // console.log(utils.parseEther(mintCount.toString()));

  const { writeAsync, status } = useContractWrite({
    mode: "recklesslyUnprepared",
    address: tokenAddress,
    abi: tokenContractABI,
    functionName: "approve",
    args: [chatRoomAddress, utils.parseEther(approveAmount.toString())],
  });

  return {
    approve: writeAsync,
    status,
  };
};
export default useTokeApprove;
