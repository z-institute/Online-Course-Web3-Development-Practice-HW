import {
  useContractWrite,
  useContractRead,
  useAccount,
  useContractEvent,
} from "wagmi";
import styles from "./styles.module.scss";
import cx from 'classnames';
import { useState } from 'react';
import { HW4_ABI, HW4_CONTRACT_ADDRESS } from "../contracts/hw4_abi";

export default function Message() {
  const { address } = useAccount();
  const [str, setStr] = useState('');
  const [reload, setReload] = useState(true);
  const [strModal, setStrModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const url = "https://goerli.etherscan.io/address/"+HW4_CONTRACT_ADDRESS;

  const { write, status, isLoading } = useContractWrite({
    mode: "recklesslyUnprepared",
    addressOrName: HW4_CONTRACT_ADDRESS,
    contractInterface: HW4_ABI,
    functionName: "newMsg",
    args: [str],
    onSuccess(data: any) {
      setReload(false);
      console.log('Success', data)
    },
    onError(error: any) {
      setStrModal(false);
      setLoading(false);
      console.log('Error', error)
    }
  });

  const { data: len } = useContractRead({
    addressOrName: HW4_CONTRACT_ADDRESS,
    contractInterface: HW4_ABI,
    functionName: "lenUserToMsgs",
    args: [address]
  });

  const { data, refetch } = useContractRead({
    addressOrName: HW4_CONTRACT_ADDRESS,
    contractInterface: HW4_ABI,
    functionName: "showLastestMsg",
    args: [len, address]
  });

  useContractEvent({
    addressOrName: HW4_CONTRACT_ADDRESS,
    contractInterface: HW4_ABI,
    eventName: "newMessage",
    listener: (event: any) => {
      setStrModal(false);
      setLoading(false);
      // console.log(event);
      if (!reload)
        location.reload();
    },
    once: true
  });

  return(
    <>
      {loading ?
        <div className="w-full h-full fixed bg-[#777] bg-opacity-80 flex z-[30]">
          <div className="w-24 h-24 mt-60 mx-auto border-b-8 border-red-300 rounded-full animate-spin"></div>
        </div>
          :
        ""
      }
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Message
          <a className="ml-6 cursor-pointer text-lg font-medium text-red-400" href={url} target="_blank" rel="noreferrer">
            Contract Scan
          </a>
          <button
            className="bg-green-700 hover:bg-green-500 text-white font-medium text-lg ml-9 py-1 px-6 rounded float-right"
            onClick={() => setStrModal(true)}
          >
            Send Message
          </button>
        </h1>
        <textarea 
          rows={ 8 }
          value={data ? data.join("\n") : "No message"}
          readOnly={ true }
          className="w-full rounded-md border mt-3 px-3 py-2">
        </textarea>

    {/* input message modal */}
      {strModal && (
        <div className={styles.alertModal} style={{ zIndex: 20 }}>
          <label className={styles.blindBoxModalbg}></label>
          <div
            className={cx(
              styles.noticeModalinner,
              "!bg-[#444753] border-2 border-[#5487FF] !rounded-md"
            )}
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
                <h1>Message Form</h1>
                <p>You can type the message what you want.</p>
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
                <button
                  className="bg-gray-400 hover:bg-gray-500 text-gray-200 font-medium text-normal py-1 px-6 rounded mt-8 float-right"
                  onClick={() => {
                    setLoading(true);
                    write();
                  }}
                >
                  Send Message
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