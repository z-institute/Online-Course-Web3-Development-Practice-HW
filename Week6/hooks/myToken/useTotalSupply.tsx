import { useContractRead, useContractWrite } from "wagmi";
import { useEffect } from "react";
import { ethers, utils } from "ethers";
import tokenContractAbi from "../../abis/myTokenAbi.json";
import { tokenAddress, chatroomAddress } from "../../constants";

const useTotalSupply = () => {
  const { data, isLoading, isError } : any = useContractRead({
    address: tokenAddress,
    abi: tokenContractAbi,
    functionName: "totalSupply",
    chainId: 5,
    watch: true,
  });

  let totalSupply = parseInt(data, 10)
  totalSupply = totalSupply  / 1000000000000000000

  return totalSupply;
};

export default useTotalSupply;
