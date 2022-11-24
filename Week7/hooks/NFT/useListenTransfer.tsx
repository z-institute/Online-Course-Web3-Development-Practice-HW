import ethers from "ethers"
import { useContractEvent } from "wagmi";
import { NFTAddress } from "../../constants";
import nftAbi from "../../abis/nftAbi.json"


const useListenTransfer = () => {
  useContractEvent({
    address: NFTAddress,
    abi: nftAbi,
    eventName: "Transfer",
    listener(from, to, tokenId) {
      const getTokenId = tokenId
      return getTokenId;
    },
    chainId: 5,
  });
}

export default useListenTransfer