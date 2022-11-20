import { useAccount, useContractRead, useContractWrite } from "wagmi";
import { useEffect } from "react";
import { ethers, utils } from "ethers";
import tokenContractAbi from "../../abis/myTokenAbi.json";
import { tokenAddress, chatroomAddress } from "../../constants";

const useBalanceOf = () => {
  const { address } = useAccount();
  const { data, isLoading, isError }: any = useContractRead({
    address: tokenAddress,
    abi: tokenContractAbi,
    functionName: "balanceOf",
    chainId: 5,
    args: [address],
    watch: true,
  });

  let balanceOf = parseInt(data, 10);
  balanceOf = balanceOf / 1000000000000000000;

  return balanceOf;
};

export default useBalanceOf;
