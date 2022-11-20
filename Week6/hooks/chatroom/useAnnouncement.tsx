import { useAccount, useContractRead, useContractWrite } from "wagmi";
import { useEffect } from "react";
import { ethers, utils } from "ethers";
import ChatRoomV2Abi from "../../abis/ChatRoomV2Abi.json";
import { tokenAddress, chatroomAddress } from "../../constants";

const useAnnouncement = () => {
  const { address } = useAccount();
  const { data, isLoading, isError }: any = useContractRead({
    address: chatroomAddress,
    abi: ChatRoomV2Abi,
    functionName: "announcement",
    chainId: 5,
    watch: true,
  });

  let announcement = data;

  return announcement;
};

export default useAnnouncement;
