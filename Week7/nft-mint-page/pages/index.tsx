import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  Box,
  Heading,
  Input,
  Button,
  Center,
  HStack,
  Link,
  Text,
} from "@chakra-ui/react";

const Home: NextPage = () => {
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
        <Box>
          <Heading as="h1" size="lg">
            Mint your free SEA token
          </Heading>
        </Box>
      </main>
    </div>
  );
};

export default Home;