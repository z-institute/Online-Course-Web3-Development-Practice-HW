import {
  useContractRead,
} from "wagmi";
import { useEffect, useState } from "react";
import chatRoomV2Abi from "../abis/chatRoomV2Abi.json";
import { chatroomAddress } from "../constants";

const useBoardAnnouncement = () => {
  const [announcement, setAnnouncement] = useState("");

  const { data: _announcement } = useContractRead({
    addressOrName: chatroomAddress,
    contractInterface: chatRoomV2Abi,
    functionName: "announcement",
    watch: true,
  });

  useEffect(() => {
    setAnnouncement(_announcement + "");
  }, [_announcement]);

  return {
    announcement
  };
};

export default useBoardAnnouncement;
