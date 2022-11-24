import { useContractWrite } from "wagmi";
import { useEffect } from "react";
import { ethers, utils } from "ethers";
import ChatRoomV2Abi from "../../abis/ChatRoomV2Abi.json";
import { tokenAddress, chatroomAddress } from "../../constants";

const useNewAnnouncementMyToken = (message: string, value: number) => {
  const {
    writeAsync,
    status: statusNewAnnouncement,
    data,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    address: chatroomAddress,
    abi: ChatRoomV2Abi,
    functionName: "newAnnouncementMyToken",
    args: [message, utils.parseEther(value.toString())],
  });

  return {
    newAnnouncementMyToken: writeAsync,
    statusNewAnnouncement,
    data,
  };
};

export default useNewAnnouncementMyToken;
