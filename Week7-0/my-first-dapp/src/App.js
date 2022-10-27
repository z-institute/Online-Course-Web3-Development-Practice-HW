import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const web3Modal = new Web3Modal({
    //network: "Goerli",
    providerOptions: {},
});

function App() {
    const [address, setAddress] = useState("");
    const [contract, setContract] = useState(null);
    const [balance, setBalance] = useState(0);
    const [message, setMessage] = useState("");
    const [paidMsg, setPaidMsg] = useState("");
    useEffect(() => {
        const init = async () => {
            const instance = await web3Modal.connect();
            const provider = new ethers.providers.Web3Provider(instance);
            const signer = provider.getSigner();
            const address = await signer.getAddress();
            const balance = await provider.getBalance(address);

            const network = await provider.getNetwork();

            const contractAddr = "0x5e1455ddf9e6D03d194e75E8721954D89365378e"; //Goerli
            const abi = [
                {
                    inputs: [],
                    name: "message",
                    outputs: [
                        {
                            internalType: "string",
                            name: "",
                            type: "string",
                        },
                    ],
                    stateMutability: "view",
                    type: "function",
                },
                {
                    inputs: [],
                    name: "retrievePaidMsg",
                    outputs: [
                        {
                            internalType: "string",
                            name: "",
                            type: "string",
                        },
                    ],
                    stateMutability: "view",
                    type: "function",
                },
                {
                    inputs: [
                        {
                            internalType: "string",
                            name: "str",
                            type: "string",
                        },
                    ],
                    name: "sotrePaidMsg",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function",
                },
                {
                    inputs: [
                        {
                            internalType: "string",
                            name: "str",
                            type: "string",
                        },
                    ],
                    name: "store",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function",
                },
            ];

            const contract = new ethers.Contract(contractAddr, abi, signer);
            //let tx = await contract.store("Free fish!");
            //await tx.wait();
            const msg = await contract.message();
            // console.log('msg= ', msg);
            // const payEtherAmount = ethers.utils.parseEther("0.012");
            // const tx = await contract.sotrePaidMsg(
            //   "This is paid Fish!",
            //   {value: payEtherAmount}
            // )
            // const response = await tx.wait()
            const paidMsg = await contract.retrievePaidMsg();
            // console.log('paidMsg= ', paidMsg);

            // console.log('connection network ', network);
            // console.log('wallet address ', address);
            // console.log(`wallet balance ${ethers.utils.formatEther(balance)} ETH`);
            // console.log(instance);

            setContract(contract);
            setAddress(address);
            setBalance(ethers.utils.formatEther(balance));
            setMessage(msg);
            setPaidMsg(paidMsg);
        };

        init();
    }, []);

    const onButtonClick = () => {
        const storeMessage = async (msg) => {
            const tx = await contract.store(msg);
            await tx.wait();
            setMessage(msg);
        };
        storeMessage("Hello John");
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hi {address},</p>
                <p>your balance is {balance} ETH !!</p>
                <p>
                    your message is "{message}", paid message is "{paidMsg}"
                </p>

                <button onClick={onButtonClick}>
                    Store message ('Hello John')
                </button>
            </header>
        </div>
    );
}

export default App;
