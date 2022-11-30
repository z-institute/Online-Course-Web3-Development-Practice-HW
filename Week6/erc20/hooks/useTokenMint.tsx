import { useContractWrite, useAccount } from "wagmi";
import { utils } from "ethers";
import tokenContractAbi from "../abis/tokenContractAbi.json";
import { tokenAddress } from "../constants";

const useTokenContract = (mintCount: number) => {
    const { address } = useAccount();

    const { writeAsync, status, data } = useContractWrite({
        mode: 'recklesslyUnprepared',
        addressOrName: tokenAddress,
        contractInterface: tokenContractAbi,
        functionName: "freeMint",
        args: [address, utils.parseEther(mintCount.toString())],
    });

    return {
        freeMint: writeAsync,
        status, data
    };
};

export default useTokenContract;
