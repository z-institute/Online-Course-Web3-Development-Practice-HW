import { ChatRoomABI, ChatRoomAddress } from "./../contract/ChatRoom";
import { useContractRead, useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { utils } from "ethers";

const useBoardLastPaid = () => {
    const [lastPaid, setLastPaid] = useState("");
    const { address } = useAccount();
    const { data: _lastPaid } = useContractRead({
        addressOrName: ChatRoomAddress,
        contractInterface: ChatRoomABI,
        functionName: "announcementLastPaidValInMyToken",
        watch: true,
    });
    //console.log("announcement ", _announcement);
    useEffect(() => {
        if (_lastPaid) {
            setLastPaid(utils.formatEther(_lastPaid));
        }
    }, [_lastPaid]);

    return {
        announcementLastPaid: lastPaid,
    };
};

export default useBoardLastPaid;
