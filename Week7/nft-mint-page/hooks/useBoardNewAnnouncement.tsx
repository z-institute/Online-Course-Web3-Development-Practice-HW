import { useContractWrite } from "wagmi";
import { chatRoomAddress } from "../constants/index";
import chatRoomContractABI from "../abis/chatRoomContractABI.json";
import { utils } from "ethers";
import useTokenApprove from "./useTokeApprove";

const useBoardNewAnnouncement = (msg: string, value: number) => {
  const { approve } = useTokenApprove(value);

  const { writeAsync, status } = useContractWrite({
    mode: "recklesslyUnprepared",
    address: chatRoomAddress,
    abi: chatRoomContractABI,
    functionName: "newAnnouncementMyToken",
    args: [msg, utils.parseEther(value.toString())],
  });

  return {
    newAnnouncementMyToken: async () => {
      let approveTx = await approve?.();
      // wait for user's reaction
      await approveTx?.wait();

      let announcementTx = await writeAsync?.();
      await announcementTx?.wait();
      // complete!
    },
    status,
  };
};
export default useBoardNewAnnouncement;
