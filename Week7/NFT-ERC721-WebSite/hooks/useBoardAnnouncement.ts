import { ChatRoomABI, ChatRoomAddress } from "./../contract/ChatRoom";
import { useContractRead, useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { utils } from "ethers";

const useBoardAnnouncement = () => {
    const [announcement, setAnnouncement] = useState("");
    const { address } = useAccount();
    const { data: _announcement } = useContractRead({
        addressOrName: ChatRoomAddress,
        contractInterface: ChatRoomABI,
        functionName: "announcement",
        //args: [address],
        watch: true,
    });
    //console.log("announcement ", _announcement);
    useEffect(() => {
        if (_announcement) {
            setAnnouncement(_announcement);
        }
    }, [_announcement]);

    return {
        announcement,
    };
};

export default useBoardAnnouncement;
