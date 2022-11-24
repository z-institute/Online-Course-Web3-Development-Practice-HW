import { useAccount, useBalance, useNetwork } from "wagmi";
import Body from "../pages/Body";

export default function Header() {
  const { address, isConnecting, isDisconnected } = useAccount();
  const balance = useBalance({
    addressOrName: address
  });
  const { chain, chains } = useNetwork();

  const right_connect = !isDisconnected && (chain?.id === chains[0].id) ;

  return(
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Account 
            {!isConnecting && !isDisconnected && 
              <small className="font-medium ml-4" style={{ fontSize:15 }}>{ address }</small>
            }
          </h1>
          <span className="float-right font-medium text-blue-400" style={{ marginTop:-30 }}>
          {balance.data ?
            <span>Balance: {balance.data.formatted} {balance.data.symbol}</span>
            : 
            <span>Please connect to Goerli testnet.</span>
          }
          </span>
        </div>
      </header>

      <Body rightConnect={right_connect}/>
    </>
  )
}