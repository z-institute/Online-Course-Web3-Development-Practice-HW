import { ChatRoomABI, ChatRoomAddress } from "./../contract/ChatRoom";
import { useContractRead, useAccount, useContractWrite } from "wagmi";
import { useEffect, useState } from "react";
import { utils } from "ethers";

const useBoardNewAnnouncement = (newMessage: string, userPay: number) => {
    const { address } = useAccount();
    const { writeAsync, status, data } = useContractWrite({
        mode: "recklesslyUnprepared",
        addressOrName: ChatRoomAddress,
        contractInterface: ChatRoomABI,
        functionName: "newAnnouncementMyToken",
        args: [newMessage, utils.parseEther(userPay.toString())],
    });

    return {
        makeNewAnnouncement: writeAsync,
        status,
        data,
    };
};

export default useBoardNewAnnouncement;
