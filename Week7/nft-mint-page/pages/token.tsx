import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  Container,
  Box,
  Button,
  useToast,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Heading,
} from "@chakra-ui/react";
import useTokenMint from "../hooks/useTokenMint";
import { useState } from "react";
import useTokenBalance from "../hooks/useTokenBalance";

// import useBoardLastPaid from "../hooks/useBoardLastPaid";

const Token: NextPage = () => {
  // 搭配input
  // const [amount, setAmount] = useState(1);
  // const { freeMintAsync } = useTokenMint(amount);
  const { freeMintAsync } = useTokenMint(1);
  const toast = useToast();
  const [status, setStatus] = useState("idle");
  const [link, setLink] = useState("");
  const { balance } = useTokenBalance();
  const [amount, setAmount] = useState<number>(20);

  // const { lastPaidVal } = useBoardLastPaid();

  return (
    <Container pt={10}>
      <Heading as="h3" size="lg">
        Free Mint SEA Token
      </Heading>
      <Heading as="h4" size="sm" mt={5}>
        Current Token Balance:{balance}
      </Heading>
      How many Token you want to mint?
      <NumberInput
        mt={5}
        // onChange={(v: number) => setAmount(v)}
        onChange={(e) => setAmount(Number(e))}
        value={amount}
        min={1}
        max={5000}
        defaultValue={50}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Text>{status}</Text>
      {link && (
        <Text>
          check on goerli:
          <a href={link} target="_blank">
            View on Etherscan
          </a>
        </Text>
      )}
      <Button
        onClick={async () => {
          try {
            setStatus("waiting for user's action");
            let freeMintTx = await freeMintAsync?.();
            setStatus("waiting for txn");
            await freeMintTx?.wait();
            setStatus("txn complete");
            console.log(freeMintTx?.hash);
            setLink(`https://goerli.etherscan.io/tx/${freeMintTx?.hash}`);

            toast({
              title: "Mint Success!",
              description: "Function: freeMint",
              status: "success",
              duration: 5000,
              isClosable: true,
            });
          } catch (err) {
            console.log("user's error");
            setStatus("user's error, please try again");
          }
        }}
      >
        Mint Token!
      </Button>
      {/* <h3>{lastPaidVal}</h3> */}
    </Container>
  );
};

export default Token;
