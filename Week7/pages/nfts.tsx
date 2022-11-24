import {
  Box,
  Button,
  Flex,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  VStack,
  useToast,
  Heading,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Nav from "../components/Nav";
import useTotalSupply from "../hooks/myToken/useTotalSupply";
import useGetUserInfo from "../hooks/useGetWalletBalance";
import useSymbol from "../hooks/myToken/useSymbol";
import NoSSRWrapper from "../components/NoSSRWrapper";
import { useEffect, useState } from "react";
import useFreeMint from "../hooks/myToken/useFreeMint";
import useIncreaseAllowance from "../hooks/myToken/useIncreaseAllowance";
import useBalanceOf from "../hooks/myToken/useBalanceOf";
import { useAccount } from "wagmi";
import useAllowance from "../hooks/myToken/useAllowance";
import useNFTMint from "../hooks/NFT/useNFTMint";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";

const NFT: NextPage = () => {
  // const userInfo = useGetUserInfo();
  // const totalSupply = useTotalSupply();
  // const balance = useBalanceOf();
  // const symbol = useSymbol();
  const [mintCount, setMintCount] = useState<number>(1);
  const { mint, status, hash }: any = useNFTMint(mintCount);
  // const { increaseAllowance, increaseStatus } = useIncreaseAllowance(amount);
  // const allowance: number = useAllowance(address, address);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (status === "completed") {
      onOpen();
    }
  }, [status]);

  return (
    <>
      <NoSSRWrapper>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Box
            p="10px"
            my="10px"
            borderBottom="1px solid #cdcdcd"
            width="80%"
            textAlign="center"
          >
            <Heading>NFTs</Heading>
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="flex-start"
            >
              <NumberInput
                mt={5}
                onChange={(v: number) => setMintCount(v)}
                value={mintCount}
                min={1}
                max={10}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>

              <Text>Status: {status}</Text>
              {hash && (
                <Link
                  href={`https://goerli.etherscan.io/tx/${hash}`}
                  isExternal
                >
                  Transactions Hash: {hash} <ExternalLinkIcon mx="2px" />
                </Link>
              )}
              {/* <pre>Status: {statusMintNFT}</pre> */}

              <Button
                colorScheme="blue"
                mt={5}
                onClick={async () => {
                  let tx = await mint();

                  // let freeMintTx = await freeMint?.();
                  // await freeMintTx?.wait();
                  // toast({
                  //   title: "Transaction Success!",
                  //   description: "Function: Mint",
                  //   status: "success",
                  //   duration: 5000,
                  //   isClosable: true,
                  // });
                }}
              >
                Mint NFT
              </Button>

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Mint Success</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    Your NFT has been minted!
                    <Link
                      href={`https://goerli.etherscan.io/tx/${hash}`}
                      isExternal
                    >
                      Transactions Hash: {hash} <ExternalLinkIcon mx="2px" />
                    </Link>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                      Close
                    </Button>
                    <Button variant="ghost">Secondary Action</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Flex>
          </Box>
        </Flex>
      </NoSSRWrapper>
    </>
  );
};

export default NFT;
