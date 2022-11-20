import { useContractRead, useContractWrite } from "wagmi";
import { useEffect } from "react";
import { ethers, utils } from "ethers";
import tokenContractAbi from "../../abis/myTokenAbi.json";
import { tokenAddress, chatroomAddress } from "../../constants";

const useSymbol = () => {
  const { data, isLoading, isError }: any = useContractRead({
    address: tokenAddress,
    abi: tokenContractAbi,
    functionName: "symbol",
    chainId: 5,
  });

  return data;
};

export default useSymbol;
