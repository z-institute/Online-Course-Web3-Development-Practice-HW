import { useAccount, useContractWrite } from "wagmi";
import { NFTAddress, PUBLIC_PRICE } from "../constants/index";
import NFTAbi from "../abis/NFTAbi.json";
import { utils } from "ethers";

const useNFTMint = (mintCount: number) => {
  const { address } = useAccount();

  // console.log(mintCount);
  // console.log(utils.parseEther(mintCount.toString()));

  const { writeAsync, status } = useContractWrite({
    mode: "recklesslyUnprepared",
    address: NFTAddress,
    abi: NFTAbi,
    functionName: "publicMintSecond",
    args: [address, mintCount.toString()],
    // 跟token min不同的地方，要計算價格
    overrides: {
      from: address,
      value: utils.parseEther((PUBLIC_PRICE * mintCount).toString()),
    },
  });

  return {
    mintAsync: writeAsync,
    status,
  };
};
export default useNFTMint;
