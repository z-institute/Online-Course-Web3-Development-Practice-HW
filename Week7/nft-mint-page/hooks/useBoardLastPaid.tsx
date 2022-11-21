import { chatRoomAddress } from "../constants";
import chatRoomContractABI from "../abis/chatRoomContractABI.json";
import { useContractRead } from "wagmi";
import { useEffect, useState } from "react";
import { utils } from "ethers";

const useBoardLastPaid = () => {
  const [lastPaidVal, setLastPaidVal] = useState("0");
  const { data: _lastPaidVal } = useContractRead({
    address: chatRoomAddress,
    abi: chatRoomContractABI,
    functionName: "announcementLastPaidValInMyToken",
    watch: true,
  });

  console.log("lastPaidVal==>", _lastPaidVal);

  useEffect(() => {
    if (_lastPaidVal) {
      setLastPaidVal(utils.formatEther(_lastPaidVal.toString()));
    }
  }, [_lastPaidVal]);

  return { lastPaidVal };
};
export default useBoardLastPaid;
