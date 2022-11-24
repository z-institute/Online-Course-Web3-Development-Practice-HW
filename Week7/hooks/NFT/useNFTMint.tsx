import { useAccount, useContractWrite, useContractEvent } from "wagmi";
import { utils } from "ethers";
import nftAbi from "../../abis/nftAbi.json";
import { NFTAddress, PUBLIC_PRICE } from "../../constants";
import { useState } from "react";

const useNFTMint = (_mintCount: number) => {
  const { address } = useAccount();
  const [ status, setStatus ] = useState("idle");
  const [ hash, setHash ] = useState("");
  const [ tokenID, setTokenID ] = useState("")

  useContractEvent({
    address: NFTAddress,
    abi: nftAbi,
    eventName: "Transfer",
    listener(from, to, tokenId) {
      const intTokenId = parseInt(tokenId, 10).toString();
      setTokenID(intTokenId);
    },
    chainId: 5,
  });

  const totalValue = PUBLIC_PRICE * _mintCount;
  const {
    writeAsync,
    status: MintNFTSuccess,
    data,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    address: NFTAddress,
    abi: nftAbi,
    functionName: "publicMintSecond",
    args: [address, _mintCount.toString()],
    overrides: {
      value: utils.parseEther(totalValue.toString()),
    },
  });

  return {
    mint: async () => {
      setStatus("minting");
      let tx = await writeAsync();
      setHash(tx.hash);
      setStatus("wating");
      await tx?.wait();
      setStatus("completed");
    },
    status,
    hash,
    tokenID,
  };
};

export default useNFTMint;
