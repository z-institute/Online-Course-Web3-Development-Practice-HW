import { tokenAddress, chatRoomAddress } from "../constants";
import tokenContractABI from "../abis/tokenContractABI.json";
import { useAccount, useContractRead } from "wagmi";
import { useEffect, useState } from "react";
import { utils } from "ethers";

const useTokenAllowance = () => {
  const { address } = useAccount();
  const [allowance, setAllowance] = useState("");
  const { data: _allowance } = useContractRead({
    address: tokenAddress,
    abi: tokenContractABI,
    functionName: "allowance",
    args: [address, chatRoomAddress],
    watch: true,
  });

  useEffect(() => {
    if (_allowance) {
      setAllowance(utils.formatEther(_allowance.toString()));
    }
  }, [_allowance]);

  return { allowance };
};
export default useTokenAllowance;
