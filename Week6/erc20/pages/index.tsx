import { Container, Heading, Button, Text } from "@chakra-ui/react";
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import useTokenMint from "../hooks/useTokenMint";
import useTokenBalance from "../hooks/useTokenBalance";
import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
    const toast = useToast();

    let [amount, setAmount] = useState<number>(50);
    let { freeMint, status: mintStatus } = useTokenMint(amount);
    let { balance } = useTokenBalance();

    return (
        <Container pt={5}>
            <Heading>Token</Heading>
            <Text>Your current Balance: {balance}</Text>

            <NumberInput
                mt={5}
                onChange={(v: any) => setAmount(v)}
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

            <Text>You want to mint {amount}</Text>
            <pre>Status: {mintStatus}</pre>

            <Button
                colorScheme="blue"
                mt={5}
                onClick={async () => {
                    let freeMintTx = await freeMint?.();
                    await freeMintTx?.wait();
                    toast({
                        title: "Transaction Success!",
                        description: "Function: Mint",
                        status: "success",
                        duration: 5000,
                        isClosable: true,
                    });
                }}
            >
                Free Mint Token
            </Button>
        </Container>
    );
};

export default Home;
