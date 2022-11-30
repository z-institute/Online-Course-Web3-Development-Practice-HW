import { useContractWrite } from "wagmi";
import chatRoomV2Abi from "../abis/chatRoomV2Abi.json";
import { chatroomAddress } from "../constants";
import useTokenApprove from "./useTokenApprove";
import { utils } from "ethers";
import { useState, useEffect } from "react";

const useBoardNewAnnouncement = (msg: string, value: number) => {
  const [status, setStatus] = useState("");
  const { approve } = useTokenApprove(value);
  const {
    writeAsync: writeBoardNewAnnouncement,
  } = useContractWrite({
    mode: 'recklesslyUnprepared',
    addressOrName: chatroomAddress,
    contractInterface: chatRoomV2Abi,
    functionName: "newAnnouncementMyToken",
    args: [msg, utils.parseEther(value + "")],
  });


  useEffect(() => {
    console.log("useBoardNewAnnouncement", status);
  }, [status])


  return {
    newAnnouncementMyToken: async () => {

      setStatus("Approving")
      let approveTx = await approve?.();
      await approveTx?.wait();

      setStatus("New Announcments");
      let announcementTx = await writeBoardNewAnnouncement?.();
      await announcementTx?.wait();
      setStatus("Tx Complete");
    },
    status,
  };
};

export default useBoardNewAnnouncement;
