import { Container, Heading, Button, Text, Input, NumberInput, NumberInputField, NumberInputStepper, NumberDecrementStepper, NumberIncrementStepper } from "@chakra-ui/react";
import { useToast, Box } from "@chakra-ui/react";
import useBalanceOf from "../hooks/myToken/useBalanceOf";
import type { NextPage } from "next";
import { useState } from "react";
import useNewAnnouncementMyToken from "../hooks/chatroom/useNewAnnouncementMyToken";
import useAnnouncement from "../hooks/chatroom/useAnnouncement";
import useAnnouncementLastPaid from "../hooks/chatroom/useAnnouncementLastPaid";
import useAllowance from "../hooks/myToken/useAllowance";
import { tokenAddress, chatroomAddress } from "../constants";
import { useAccount } from "wagmi";
import Nav from "../components/Nav";
import NoSSRWrapper from "../components/NoSSRWrapper";
import useApprove from "../hooks/myToken/useApprove";
import useSymbol from "../hooks/myToken/useSymbol";

const Board: NextPage = () => {
  const toast = useToast();

  const { address }: any = useAccount();
  const lastPaidVal = useAnnouncementLastPaid();
  let balance = useBalanceOf();
  let allowance = useAllowance(address, chatroomAddress);
  const symbol = useSymbol();
  const announcement = useAnnouncement();

  let [message, setMessage] = useState<string>("");
  let [value, setValue] = useState<number>(0);
  let [approveAllowance, setApproveAllowance] = useState<number>(0);
  const { approve, statusApprove } = useApprove(approveAllowance);

  //   let newAnnouncementMyToken = () => {};
  const { newAnnouncementMyToken, statusNewAnnouncement, data } =
    useNewAnnouncementMyToken(message, value);

  return (
    <>
      <NoSSRWrapper>
        <Container pt={5} mb="70px">
          <Heading>Board</Heading>
          <Text>
            Current Balance: {balance} {symbol}
          </Text>
          <Text>Current Announcement: </Text>
          <Box
            mt={3}
            p={3}
            px={5}
            backgroundColor="gray.200"
            borderRadius={"lg"}
          >
            <Heading size={"xl"}>{announcement}</Heading>
            <Text textAlign="right">Paid by {address}</Text>
          </Box>
          <Box mt={3} p={3} backgroundColor="gray.200" borderRadius={"lg"}>
            <Text> Last Paid: {lastPaidVal}</Text>
            <Input
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              placeholder="Message"
              borderColor="gray.500"
              mt={3}
            />

            <NumberInput
              onChange={(e) => {
                if (value < 0) {
                  setValue(0);
                }
                setValue(e);
              }}
              value={value}
              placeholder="Value"
              borderColor="gray.500"
              mt={3}
              min={0}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            {statusNewAnnouncement && (
              <Text>Status: {statusNewAnnouncement}</Text>
            )}

            <Button
              colorScheme="blue"
              mt={5}
              onClick={async () => {
                await newAnnouncementMyToken?.();
                toast({
                  title: "Transaction Success!",
                  description: "Function: Post new announcement",
                  status: "success",
                  duration: 5000,
                  isClosable: true,
                });
              }}
            >
              Post your message
            </Button>
          </Box>
          <Box mt={3} p={3} backgroundColor="gray.200" borderRadius={"lg"}>
            <Text> Current Allowance: {allowance}</Text>
            <NumberInput
              onChange={(e: number) => {
                if (value < 0) {
                  setApproveAllowance(0);
                }
                setApproveAllowance(e);
              }}
              value={approveAllowance}
              placeholder="Value"
              borderColor="gray.500"
              mt={3}
              min={1}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>

            {statusApprove && <Text>Status: {statusApprove}</Text>}

            <Button
              colorScheme="blue"
              mt={5}
              onClick={async () => {
                let approveTx = await approve?.();
                await approveTx?.wait();
                toast({
                  title: "Approve Allowance Success!",
                  description: "Function: Post new announcement",
                  status: "success",
                  duration: 5000,
                  isClosable: true,
                });
              }}
            >
              Approve Allowance
            </Button>
          </Box>
        </Container>
      </NoSSRWrapper>
    </>
  );
};

export default Board;
