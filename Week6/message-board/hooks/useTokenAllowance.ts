import { ChatRoomAddress } from "./../contract/ChatRoom";
import { MyTokenABI, MyTokenAddress } from "./../contract/MyToken";
//import { ChatRoomABI, ChatRoomAddress } from "./../contract/MyToken";
import { useContractRead, useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { utils } from "ethers";

const useTokenAllowance = () => {
    const [allowance, setAllowance] = useState("");
    const { address: ownerAddr } = useAccount();
    const { data: _allowance } = useContractRead({
        addressOrName: MyTokenAddress,
        contractInterface: MyTokenABI,
        functionName: "allowance",
        args: [ownerAddr, ChatRoomAddress],
        watch: true,
    });

    useEffect(() => {
        if (_allowance) {
            setAllowance(utils.formatEther(_allowance));
        }
    }, [_allowance]);

    return {
        allowance,
    };
};

export default useTokenAllowance;
