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
} from "@chakra-ui/react";
import { NextPage } from "next";
import Nav from "../components/Nav";
import useTotalSupply from "../hooks/myToken/useTotalSupply";
import useGetUserInfo from "../hooks/useGetWalletBalance";
import useSymbol from "../hooks/myToken/useSymbol";
import NoSSRWrapper from "../components/NoSSRWrapper";
import { useState } from "react";
import useFreeMint from "../hooks/myToken/useFreeMint";
import useIncreaseAllowance from "../hooks/myToken/useIncreaseAllowance";
import useBalanceOf from "../hooks/myToken/useBalanceOf";
import { useAccount } from "wagmi";
import useAllowance from "../hooks/myToken/useAllowance";

const Token: NextPage = () => {
  const { address }: any = useAccount();
  const userInfo = useGetUserInfo();
  const totalSupply = useTotalSupply();
  const balance = useBalanceOf();
  const symbol = useSymbol();
  const [amount, setAmount] = useState<number>(0);
  const { freeMint, status: mintStatus } = useFreeMint(amount);
  const { increaseAllowance, increaseStatus } =
    useIncreaseAllowance(amount);
  const allowance: number = useAllowance(address, address);
  const toast = useToast();

  return (
    <>
      <Nav></Nav>
      <NoSSRWrapper>
        <Flex flexDirection="column" justifyContent="flex-start">
          <Box p="10px" border="1px solid gray">
            <Text fontSize="2xl" style={{ fontWeight: "bold" }}>
              Account Infomation{" "}
            </Text>
            <Text fontSize="xl" style={{ fontWeight: "bold" }}>
              Wallet Address:
            </Text>
            <Text fontSize="lg">{userInfo.addr}</Text>
            <Text fontSize="xl" style={{ fontWeight: "bold" }}>
              Goerli test Balance:
            </Text>
            <Text fontSize="lg">
              {userInfo.balance} {userInfo.symbol}
            </Text>
          </Box>
          <Box p="10px" border="1px solid gray">
            <Flex
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <Text fontSize="2xl" style={{ fontWeight: "bold" }}>
                {symbol} Token Infomation
              </Text>
              <Text fontSize="xl">
                Total supply: {totalSupply} {symbol}
              </Text>
              <Text fontSize="xl">Your wallet balance of : {balance} YTC</Text>
              <Text fontSize="xl">Your allowance : {allowance} YTC</Text>
              <NumberInput
                mt={5}
                onChange={(v: number) => setAmount(v)}
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
              <pre>Status: {mintStatus || increaseStatus}</pre>
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

                  let increaseAllowanceTx = await increaseAllowance?.();
                  await increaseAllowanceTx?.wait();
                  toast({
                    title: "Increase Allowance Success!",
                    description: "Function: increaseAllowance",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                  });
                }}
              >
                Free Mint Token
              </Button>
            </Flex>
          </Box>
        </Flex>
      </NoSSRWrapper>
    </>
  );
};

export default Token;
