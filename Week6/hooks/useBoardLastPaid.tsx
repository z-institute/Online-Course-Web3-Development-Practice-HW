import { useContractRead } from "wagmi";
import { useEffect, useState } from "react";
import { utils } from "ethers";
import chatRoomV2Abi from "../abis/chatRoomV2Abi.json";
import { chatroomAddress } from "../constants";

const useBoardLastPaid = () => {
  const [lastPaidVal, setLastPaidVal] = useState("0");

  const { data: _lastPaidVal } = useContractRead({
    addressOrName: chatroomAddress,
    contractInterface: chatRoomV2Abi,
    functionName: "announcementLastPaidValInPoToken",
    watch: true,
  });

  useEffect(() => {
    if (_lastPaidVal) setLastPaidVal(utils.formatEther(_lastPaidVal));
  }, [_lastPaidVal]);

  return {
    lastPaidVal,
  };
};

export default useBoardLastPaid;
