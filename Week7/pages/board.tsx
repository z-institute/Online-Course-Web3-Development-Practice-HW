import { Container, Heading, Button, Text, Input } from "@chakra-ui/react";
import { useToast, Box } from "@chakra-ui/react";
import useTokenBalance from "../hooks/useTokenBalance";
import type { NextPage } from "next";
import { useState } from "react";
import useBoardNewAnnouncement from "../hooks/useBoardNewAnnouncement";
import useBoardAnnouncement from "../hooks/useBoardAnnouncement";
import useBoardLastPaid from "../hooks/useBoardLastPaid";
import useTokenAllowence from "../hooks/useTokenAllowence";

const Board: NextPage = () => {
  const toast = useToast();

  const { announcement } = useBoardAnnouncement();
  const { lastPaidVal } = useBoardLastPaid();

  let [message, setMessage] = useState<string>("Random Message");
  let [value, setValue] = useState<number>(1);
  let { balance } = useTokenBalance();
  let { allowance } = useTokenAllowence();

  //   let newAnnouncementMyToken = () => {};
  let { newAnnouncementMyToken, status: newAnnouncementStatus } = useBoardNewAnnouncement(
    message,
    value
  );

  return (
    <Container pt={5}>
      <Heading>Board</Heading>
      <Text>Current Balance: {balance}</Text>
      <Text>Current Announcement: </Text>
      <Box mt={3} p={3} px={5} backgroundColor='gray.200' borderRadius={'lg'}>

        <Heading size={"xl"}>{announcement}</Heading>
      </Box>
      <Box mt={3} p={3} backgroundColor='gray.200' borderRadius={'lg'}>
        <Text> Last Paid: {lastPaidVal}</Text>
        <Text> Current Allowance: {allowance}</Text>
        <Input
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder="Message"
          borderColor="gray.500"
          mt={3}
        />
        <Input
          onChange={(e) => setValue(parseInt(e.target.value))}
          value={value}
          placeholder="Value"
          borderColor="gray.500"
          mt={3}
        />
        {newAnnouncementStatus && <Text>Status: {newAnnouncementStatus}</Text>}

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
    </Container>
  );
};

export default Board;
