import { useContractWrite, useAccount } from "wagmi";
import { utils } from "ethers";
import NFTAbi from "../abis/NFTAbi.json";
import { NFTAddress, PUBLIC_PRICE } from "../constants";

const useNFTMint = (mintCount: number) => {
  const { address } = useAccount();
  const { writeAsync, status, data } = useContractWrite({
    mode: "recklesslyUnprepared",
    addressOrName: NFTAddress,
    contractInterface: NFTAbi,
    functionName: "publicMintSecond",
    args: [address, mintCount.toString()],
    overrides: {
      from: address,
      value: utils.parseEther((PUBLIC_PRICE * mintCount).toString()),
    },
  });

  return {
    mint: writeAsync,
    status,
    data,
  };
};

export default useNFTMint;
