import { Container, Heading, Button, Text, Box } from "@chakra-ui/react";
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    useDisclosure,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useToast, Link } from "@chakra-ui/react";
import useNFTMint from "../hooks/useNFTMint";
import useNFTWhitelistMint from "../hooks/useNFTWhitelistMint";
import { useNetwork, useSwitchNetwork } from "wagmi";
import { useAccount } from "wagmi";
import type { NextPage } from "next";
import { useState } from "react";

import Popup from "../components/Popup";

const Nft: NextPage = () => {
    const toast = useToast();
    let [amount, setAmount] = useState<number>(1);
    const { mint } = useNFTMint(amount);
    const { whitelistMint, inWhiteList } = useNFTWhitelistMint(amount);

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { address, isConnecting, isDisconnected } = useAccount();
    const [currentTxHash, setCurrentTxHash] = useState("");
    const [isMinting, setIsMinting] = useState(false);

    return (
        <Container pt={5}>
            <Heading>ZZ NFT</Heading>
            <Text>Your current account: {address}</Text>
            <NumberInput
                mt={5}
                onChange={(v: number) => setAmount(v)}
                value={amount}
                min={1}
                max={10}
                defaultValue={50}
            >
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>

            {!address && <Text>Connect your wallet to continue</Text>}
            <Button
                colorScheme="blue"
                disabled={!address}
                onClick={async () => {
                    try {
                        let tx = await mint();
                        setIsMinting(true);
                        setCurrentTxHash(tx.hash);
                        await tx.wait();
                        setIsMinting(false);
                        onOpen();
                    } catch (e) {
                        toast({
                            title: "Error",
                            description: JSON.stringify(e),
                            status: "error",
                            duration: 9000,
                            isClosable: true,
                        });
                        console.log("Error!", e);
                    }
                }}
                mt={2}
            >
                Mint NFT
            </Button>

            <Box mt={4}>
                {inWhiteList && <Text>You are In Whitelist</Text>}
                <Button
                    colorScheme="yellow"
                    disabled={!address}
                    ml={2}
                    onClick={async () => {
                        try {
                            let tx = await whitelistMint();
                            setIsMinting(true);
                            setCurrentTxHash(tx.hash);
                            await tx.wait();
                            setIsMinting(false);
                            onOpen();
                        } catch (e) {
                            toast({
                                title: "Error",
                                description: e?.reason,
                                status: "error",
                                duration: 5000,
                                isClosable: true,
                            });
                            console.log(JSON.stringify(e));
                        }
                    }}
                    mt={2}
                >
                    Whitelist Mint NFT
                </Button>
            </Box>

            <Popup
                isOpen={isOpen}
                onClose={onClose}
                title={"Mint Success!"}
                content={
                    <Link
                        href={`https://goerli.etherscan.io/tx/${currentTxHash}`}
                        isExternal
                    >
                        Transaction Hash <ExternalLinkIcon mx="2px" />
                    </Link>
                }
            ></Popup>

            {isMinting && <Text>User Is Minting</Text>}
        </Container>
    );
};

export default Nft;
