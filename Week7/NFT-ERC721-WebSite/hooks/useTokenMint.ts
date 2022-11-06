import { MyTokenABI, MyTokenAddress } from "./../contract/MyToken";
import { useContractRead, useAccount, useContractWrite } from "wagmi";
import { useEffect, useState } from "react";
import { utils } from "ethers";

const useTokenMint = (mintCount: number) => {
    const { address } = useAccount();
    const { writeAsync, status, data } = useContractWrite({
        mode: "recklesslyUnprepared",
        addressOrName: MyTokenAddress,
        contractInterface: MyTokenABI,
        functionName: "freeMint",
        args: [address, utils.parseEther(mintCount.toString())],
    });

    return {
        freeMint: writeAsync,
        status,
        data,
    };
};

export default useTokenMint;
