import { useContractRead, useContractWrite } from "wagmi";
import { useEffect } from "react";
import { utils } from "ethers";
import tokenContractAbi from "../../abis/myTokenAbi.json";
import { tokenAddress, chatroomAddress } from "../../constants";

const useAllowance = (owner: string, spender: string) => {
  const { data, isLoading, isError } : any = useContractRead({
    address: tokenAddress,
    abi: tokenContractAbi,
    functionName: "allowance",
    chainId: 5,
    args: [owner, spender],
    watch: true,
  });

    let allowance = parseInt(data, 10);
    allowance = allowance / 1000000000000000000;

  return allowance;
};

export default useAllowance;
