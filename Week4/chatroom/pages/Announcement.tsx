import { useEffect, useState } from 'react';
import { HW4_ABI, HW4_CONTRACT_ADDRESS } from "../contracts/hw4_abi";
import {
  useContractWrite,
  useContractReads,
  useAccount,
  useBalance,
  useContractEvent,
} from "wagmi";
import styles from "./styles.module.scss";
import cx from 'classnames';
import { ethers } from 'ethers'

export default function Announcement() {
  const [str, setStr] = useState('');
  const [fee, setFee] = useState(0);
  const [strModal, setStrModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const url = "https://goerli.etherscan.io/address/"+HW4_CONTRACT_ADDRESS;

  const { address } = useAccount();
  const balance = useBalance({
    addressOrName: address
  });

  const { write, status, isLoading } = useContractWrite({
    mode: "recklesslyUnprepared",
    addressOrName: HW4_CONTRACT_ADDRESS,
    contractInterface: HW4_ABI,
    functionName: "newAnnouncement",
    args: [str],
    overrides: {
      value: String(fee),
    },
    onError(error: any) {
      setStrModal(false);
      setLoading(false);
      console.log('Error', error)
    }
  });

  const { data, refetch } = useContractReads({
    contracts: [
      {
        addressOrName: HW4_CONTRACT_ADDRESS,
        contractInterface: HW4_ABI,
        functionName: "announcement",
      },
      {
        addressOrName: HW4_CONTRACT_ADDRESS,
        contractInterface: HW4_ABI,
        functionName: "announcementLastPaidVal",
      }
    ]
  });

  useContractEvent({
    addressOrName: HW4_CONTRACT_ADDRESS,
    contractInterface: HW4_ABI,
    eventName: "newAnnouncementEvent",
    listener: (event: any) => {
      setStrModal(false);
      setLoading(false);
      refetch();
    },
    once: true
  });

  useEffect(() => {
    setTheFee(data);
  },[data])

  const setTheFee = (data: any) => {
    setFee(parseInt(data[1]._hex) + 1);
  }

  return(
    <>
      {loading ?
        <div className="w-full h-full fixed flex z-[30]">
          <div className="w-24 h-24 mx-auto border-b-8 border-red-300 rounded-full animate-spin"></div>
        </div>
          :
        ""
      }
      <div className="max-w-7xl mx-auto p-4 mb-48 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Announcement
          <a className="ml-6 cursor-pointer text-lg font-medium text-red-400" href={url} target="_blank" rel="noreferrer">
            Contract Scan
          </a>
          <button
            className="bg-pink-700 hover:bg-pink-500 text-white font-medium text-lg ml-9 py-1 px-6 rounded float-right"
            onClick={() => setStrModal(true)}
          >
            Send Announcement
          </button>
        </h1>
        <table className="w-1/2 mt-4">
          <tbody>
            <tr className="bg-white">
              <td className="h-9 text-gray-900 font-medium">Paid message</td>
              <td className="text-blue-500 font-medium border-b">
                { data && data[0] }
              </td>
            </tr>
            <tr className="bg-white">
              <td className="h-9 text-gray-900 font-medium">Paid fee</td>
              <td className="text-blue-500 font-medium border-b">
                More than { data && ethers.utils.formatEther(data[1]) } {balance.data?.symbol}
                {" "} ({data && parseInt(data[1]._hex)} WEI)
              </td>
            </tr>
          </tbody>
        </table>

    {/* input message modal */}
      {strModal && (
        <div className={styles.alertModal} style={{ zIndex: 20 }}>
          <label className={styles.blindBoxModalbg}></label>
          <div
            className={cx(
              styles.noticeModalinner,
              "!bg-[#555864] border-2 border-[#5487FF] !rounded-md"
            )}
            style={{ height:"43vh" }}
          >
            <button
              type="button"
              onClick={() => {
                setStrModal(false);
              }}
              className={styles.blindBoxModalclose}
            ></button>
            <div className={styles.noticeFlexContainer}>
              <div className={styles.noticeContent}>
                <h1>Announcement Form</h1>
                <p>You can type the announcement what you want and pay the fee more than previous ( {data && parseInt(data[1]._hex)} WEI ).</p>
                <div className="flex mt-6">
                  <input
                    className="!w-full !bg-transparent !border-[#3075C5]"
                    type="text"
                    value={str}
                    //@ts-ignore
                    onChange={(e) => setStr(e.target.value)}
                    placeholder="Type your message"
                  />
                </div>
                <div className="flex mt-6">
                  <input
                    className="!w-1/2 !bg-transparent !border-[#3075C5]"
                    type="text"
                    value={fee}
                    //@ts-ignore
                    onChange={(e) => setFee(e.target.value)}
                    placeholder="Type your paid fee"
                  />
                  <span style={{ marginLeft: "1rem" }}>
                    WEI
                  </span>
                </div>
                <button
                  className="bg-gray-400 hover:bg-gray-500 text-gray-200 font-medium text-normal py-1 px-6 rounded mt-8 float-right"
                  onClick={() => {
                    setLoading(true);
                    write();
                  }}
                >
                  Send Announcement
                </button>

              </div>                            
            </div>
          </div>
        </div>
      )}
      
      </div>
    </>
  )
}