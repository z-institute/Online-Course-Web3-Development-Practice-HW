import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import useEnsData from "../hooks/useEns";
import abi from "../contract/contract.json";
import { useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi'
import { useEffect, useState } from "react";

//0xceb3A1a074952a81bf3Adf95cBedBD5fd1Ce7b64
const Home: NextPage = () => {
  const { ensData } = useEnsData(undefined);
  const [Switch, setSwitch] = useState(false);
  const { data, isError, isLoading } = useContractRead({
    address: '0xceb3A1a074952a81bf3Adf95cBedBD5fd1Ce7b64',
    abi: abi,
    functionName: 'retrieve',
    onSuccess(data) {

      setSwitch(data)
      console.log('ok', data, Switch)
    }
  })

  const contractWrite = useContractWrite({
    mode: 'recklesslyUnprepared',
    address: '0xceb3A1a074952a81bf3Adf95cBedBD5fd1Ce7b64',
    abi: abi,
    functionName: 'store',
    args: [],
  })
  return (
    <div className={styles.container}>
      <Head>
        <title>RainbowKit App</title>
        <meta
          name="description"
          content="Generated by @rainbow-me/create-rainbowkit"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ConnectButton />
        <h6>Address:{ensData.address}</h6>
        <h6>ENSName:{ensData.ensName}</h6>
        <div>
          <input type="radio" id="huey" name="drone" value="true"
            checked={Switch === true} />
          <label>true</label>
        </div>

        <div>
          <input type="radio" id="dewey" name="drone" value="false" checked={Switch === false} />
          <label>false</label>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://rainbow.me" target="_blank" rel="noopener noreferrer">
          Made with ❤️ by your frens at 🌈
        </a>
      </footer>
    </div>
  );
};

export default Home;
