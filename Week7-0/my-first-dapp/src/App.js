import { ethers } from "ethers";
import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3Modal from "web3modal";

const web3Modal = new Web3Modal({
  network: "goerli", 
  providerOptions: {} 
});

function App() {
  const [contract, setContract] = useState(null);
  const [address, setAddress] = useState('0x0');
  const [balance, setBalance] = useState("0");
  const [ensAddress, setEnsAddress] = useState("0");
  const [message, setMessage] = useState("");
  const [paidMsg, setPaidMsg] = useState("");
  const [inputMsg, setInputMsg] = useState("");


  useEffect(() => {
    async function init() {
      const instance = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(instance);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      const balance = await provider.getBalance(address);
      const ensAddress = await provider.lookupAddress(address);
      const contractAddress = "0x08E61E87199e270D0fb92880909Bd57f2B6274b8";
      const contractAbi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "str",
				"type": "string"
			}
		],
		"name": "store",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "str",
				"type": "string"
			}
		],
		"name": "storePaidMsg",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "message",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "retrievePaidMsg",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
      ];
      // console.log(ethers.utils.formatEther(balance) + " ETH"); // this is big number
      // console.log(ensAddress); // only available in mainnet
      const contract = new ethers.Contract(contractAddress, contractAbi, signer);
      // console.log(contract); 

      // let tx = await contract.store("fish")
      // await tx.wait()

      // let tx = await contract.storePaidMsg("paid fish",
      // {value:ethers.utils.formatEther("0.1")})
      // await tx.wait()

      let msg = await contract.message();
      let paidMsg = await contract.retrievePaidMsg();

      setAddress(address);
      setEnsAddress(ensAddress);
      setBalance(ethers.utils.formatEther(balance));    
      setContract(contract);
      setMessage(msg);
      setPaidMsg(paidMsg);
    }
    init();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi, {ensAddress}!<br/>
          Your balance is { balance } ETH.<br/>
          Your address is  {" "} {address}<br/>
          Your Message is {message}.<br/>
          Your paid message is {paidMsg}.
        </p>
        <input
          value={inputMsg}
          onChange={(e) => setInputMsg(e.target.value)}
        ></input>
        <button
          onClick={() =>{
            async function storeFunction(){
              let tx = await contract.store(inputMsg)
              await tx.wait()
              let msg = await contract.message();
              setMessage(msg);
            }
            storeFunction();
          }}
        >store msg</button>
        <button
          onClick={() =>{
            async function storeFunction(){
              let tx = await contract.storePaidMsg("paid fish",{value:ethers.utils.formatEther("0.1")})
              await tx.wait()

              let _paidmsg = await contract.paidMessage();
              setPaidMsg(_paidmsg);
            }
            storeFunction();
          }}
        >store paid msg</button>
      </header>
    </div>
  );
}

export default App;
