import { useContractRead, useAccount } from "wagmi";
import { tokenAddress } from "../constants/index";
import tokenContractABI from "../abis/tokenContractABI.json";
import { useState, useEffect } from "react";
import { utils } from "ethers";

const useTokenBalance = () => {
  const { address } = useAccount();
  const [balance, setBalance] = useState("");
  const { data: _balance } = useContractRead({
    address: tokenAddress,
    abi: tokenContractABI,
    functionName: "balanceOf",
    args: [address],
    watch: true,
  });

  // console.log(_balance);
  // console.log(_balance.toString());
  // console.log(_balance + "");

  useEffect(() => {
    if (_balance) {
      setBalance(utils.formatEther(_balance.toString()));
    }
  }, [_balance]);

  return { balance };
};
export default useTokenBalance;
