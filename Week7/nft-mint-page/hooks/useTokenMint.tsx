import { useAccount, useContractWrite } from "wagmi";
import { tokenAddress } from "../constants/index";
import tokenContractABI from "../abis/tokenContractABI.json";
import { utils } from "ethers";

const useTokenMint = (mintCount: number) => {
  const { address } = useAccount();

  // console.log(mintCount);
  // console.log(utils.parseEther(mintCount.toString()));

  const { writeAsync, status } = useContractWrite({
    mode: "recklesslyUnprepared",
    address: tokenAddress,
    abi: tokenContractABI,
    functionName: "freeMint",
    args: [address, utils.parseEther(mintCount.toString())],
  });

  return {
    freeMintAsync: writeAsync,
    status,
  };
};
export default useTokenMint;
