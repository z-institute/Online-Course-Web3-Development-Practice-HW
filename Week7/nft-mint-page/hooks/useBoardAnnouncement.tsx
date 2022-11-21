import { chatRoomAddress } from "../constants";
import chatRoomContractABI from "../abis/chatRoomContractABI.json";
import { useContractRead } from "wagmi";
import { useEffect, useState } from "react";

const useBoardAnnouncement = () => {
  const [announcement, setAnnouncement] = useState("");
  const { data: _announcement } = useContractRead({
    address: chatRoomAddress,
    abi: chatRoomContractABI,
    functionName: "announcement",
    watch: true,
  });

  useEffect(() => {
    if (_announcement) {
      setAnnouncement(_announcement.toString());
    }
  }, [_announcement]);

  return { announcement };
};
export default useBoardAnnouncement;
