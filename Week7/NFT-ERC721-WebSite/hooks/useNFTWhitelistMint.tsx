import { useContractWrite, useAccount } from "wagmi";
import { utils } from "ethers";
import { ZZNFTABI, ZZNftContractAddress } from "./../contract/NFT";
//import NFTAbi from "../abis/NFTAbi.json";
import { WHITELIST_PRICE } from "../constants";
import WHITELIST from "../constants/whitelist.json";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";

type Voucher = {
    redeemer?: string;
};

const getWhiteListData = (address: string) => {
    if (!address) {
    }
    let whitelistData = new Map(Object.entries(WHITELIST));
    console.log(address?.toLowerCase(), whitelistData);
    let useWhiteListData = whitelistData.get(address?.toLowerCase());
    let voucher: Voucher = { redeemer: "" },
        signature: string = "",
        inWhiteList: boolean = false;

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
    // console.log(voucher, signature);

    const { voucher, signature, inWhiteList } = getWhiteListData(address || "");
    // console.log([, mintCount.toString(), address]);

    const { writeAsync, status, data } = useContractWrite({
        mode: "recklesslyUnprepared",
        addressOrName: ZZNftContractAddress,
        contractInterface: ZZNFTABI,
        functionName: "whitelistMint",
        args: [voucher, signature, mintCount.toString(), address],
        overrides: {
            from: address,
            value: utils.parseEther((WHITELIST_PRICE * mintCount).toString()),
        },
    });

    return {
        whitelistMint: async () => {
            return await writeAsync();
        },
        inWhiteList,
        status,
        data,
    };
};

export default useNFTWhitelistMint;
