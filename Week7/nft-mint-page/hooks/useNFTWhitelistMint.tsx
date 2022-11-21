import { useAccount, useContractWrite } from "wagmi";
import { NFTAddress, PUBLIC_PRICE } from "../constants/index";
import NFTAbi from "../abis/NFTAbi.json";
import { utils } from "ethers";
import WHITELIST from "../constants/whitelist.json";

type Voucher = {
  redeemer: string;
};

const getWhiteListData = (address: string) => {
  let whiteListData = new Map(Object.entries(WHITELIST));
  let useWhiteListData = whiteListData.get(address?.toLowerCase());

  let voucher: Voucher = { redeemer: "" };
  let signature: string = "";
  let inWhiteList: boolean = false;
  if (useWhiteListData) {
    voucher = useWhiteListData.voucher;
    signature = useWhiteListData.signature;
    inWhiteList = true;
  }

  return {
    voucher,
    signature,
    inWhiteList,
  };
};

const useNFTWhitelistMint = (mintCount: number) => {
  const { address } = useAccount();

  const { voucher, signature, inWhiteList } = getWhiteListData(address || "");

  const { writeAsync, status } = useContractWrite({
    mode: "recklesslyUnprepared",
    address: NFTAddress,
    abi: NFTAbi,
    functionName: "whitelistMint",
    args: [voucher, signature, mintCount, address],
    overrides: {
      from: address,
      value: utils.parseEther((PUBLIC_PRICE * mintCount).toString()),
    },
  });

  return {
    whiteListmintAsync: writeAsync,
    status,
    inWhiteList,
  };
};
export default useNFTWhitelistMint;
