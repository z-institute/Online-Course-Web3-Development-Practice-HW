import { MyTokenABI, MyTokenAddress } from "./../contract/MyToken";
import { useContractRead, useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { utils } from "ethers";

const useTokenBalance = () => {
    const [balance, setBalance] = useState("");
    const { address } = useAccount();
    const { data: _balance } = useContractRead({
        addressOrName: MyTokenAddress,
        contractInterface: MyTokenABI,
        functionName: "balanceOf",
        args: [address],
        watch: true,
    });

    useEffect(() => {
        if (_balance) {
            setBalance(utils.formatEther(_balance));
        }
    }, [_balance]);

    return {
        balance,
    };
};

export default useTokenBalance;
