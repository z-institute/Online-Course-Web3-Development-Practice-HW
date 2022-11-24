import { useContractRead, useContractWrite } from "wagmi";
import { useEffect } from "react";
import { utils } from "ethers";
import ChatRoomV2Abi from "../../abis/ChatRoomV2Abi.json";
import { tokenAddress, chatroomAddress } from "../../constants";

const useAnnouncementLastPaid = () => {
  const { data, isLoading, isError }: any = useContractRead({
    address: chatroomAddress,
    abi: ChatRoomV2Abi,
    functionName: "announcementLastPaidValInMyToken",
    chainId: 5,
    watch: true,
  });

  let useAnnouncementLastPaid = parseInt(data, 10);
  useAnnouncementLastPaid = useAnnouncementLastPaid / 1000000000000000000

  return useAnnouncementLastPaid;
};

export default useAnnouncementLastPaid;
