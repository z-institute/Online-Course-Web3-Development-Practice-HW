import { MyTokenABI, MyTokenAddress } from "./../contract/MyToken";
import { ChatRoomAddress } from "./../contract/ChatRoom";
import { useAccount, useContractWrite } from "wagmi";
import { useEffect, useState } from "react";
import { utils } from "ethers";

const useTokenIncreaseAllowance = (addValue: number) => {
    const { address } = useAccount();
    const { writeAsync, status, data } = useContractWrite({
        mode: "recklesslyUnprepared",
        addressOrName: MyTokenAddress,
        contractInterface: MyTokenABI,
        functionName: "increaseAllowance",
        args: [ChatRoomAddress, utils.parseEther(addValue.toString())],
    });

    return {
        increaseAllowance: writeAsync,
        status,
        data,
    };
};

export default useTokenIncreaseAllowance;
