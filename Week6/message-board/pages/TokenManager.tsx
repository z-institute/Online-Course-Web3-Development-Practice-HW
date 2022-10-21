import React, { useState } from "react";
import type { NextPage } from "next";
import {
    useToast,
    Box,
    Heading,
    Button,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Text,
} from "@chakra-ui/react";

import useTokenBalance from "../hooks/useTokenBalance";
import useTokenMint from "../hooks/useTokenMint";

const TokenManager: NextPage = () => {
    const [status, setStatus] = useState("idle");
    const [mintCount, setMintCount] = useState(1);
    const [txHash, setTxHash] = useState("");
    const toast = useToast();
    const { balance } = useTokenBalance();
    //console.log("balance, ", balance);
    const {
        freeMint,
        status: mintStatus,
        data: mintData,
    } = useTokenMint(mintCount);
    //console.log("mintData ", mintData);

    const onMintClick = async () => {
        setStatus("waiting for user");
        console.log(`going to min ${mintCount} TTT`);
        const freeMintTx = await freeMint?.();
        setStatus("waiting for TX complete");
        setTxHash(freeMintTx.hash);
        //console.log("freeMintTx ", freeMintTx);
        await freeMintTx.wait();
        setStatus("TX complete");
        setMintCount(1);
        toast({
            title: "Transaction Success!",
            description: "Function: Mint",
            status: "success",
            duration: 5000,
            isClosable: true,
            onCloseComplete: () => {
                setStatus("idle");
                setTxHash("");
            },
        });
    };
    return (
        <Box p="3">
            <Heading>Free Mint TTT</Heading>

            <p>Current Balance: {balance} TTT</p>
            <Box
                display="flex"
                alignItems="center"
                w="60%"
                justifyContent="space-around"
            >
                <Text>Mint</Text>

                <NumberInput
                    size="sm"
                    value={mintCount}
                    onChange={(value) => setMintCount(value)}
                    defaultValue={1}
                    min={1}
                    max={100}
                >
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                <Text>TTT</Text>

                <Button onClick={onMintClick}>Go!!</Button>
            </Box>
            <p>Status: {status}</p>
            {txHash && (
                <a
                    href={`https://goerli.etherscan.io/tx/${txHash}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    View on Etherscan {txHash}
                </a>
            )}
        </Box>
    );
};

export default TokenManager;
