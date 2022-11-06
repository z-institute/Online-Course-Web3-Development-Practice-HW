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
    Input,
} from "@chakra-ui/react";

import useTokenBalance from "../hooks/useTokenBalance";
import useTokenAllowance from "../hooks/useTokenAllowance";
import useBoardAnnouncement from "../hooks/useBoardAnnouncement";
import useBoardLastPaid from "../hooks/useBoardLastPaid";
import useBoardNewAnnouncement from "../hooks/useBoardNewAnnouncement";
import useTokenIncreaseAllowance from "../hooks/useTokenIncreaseAllowance";

const Board: NextPage = () => {
    const toast = useToast();
    const [userInputMsg, setUserInputMsg] = useState("");
    const [userPay, setUserPay] = useState(0);
    const [addAllowance, setAddAllowance] = useState(0);
    const [postMsgStatus, setPostMsgStatus] = useState("idle");
    const { balance } = useTokenBalance();
    const { allowance } = useTokenAllowance();
    const { announcement } = useBoardAnnouncement();
    const { announcementLastPaid } = useBoardLastPaid();
    const { makeNewAnnouncement, data: postMsgData } = useBoardNewAnnouncement(
        userInputMsg,
        userPay
    );
    const {
        increaseAllowance,
        status: increaseAllowanceStatus,
        data: increaseAllowanceData,
    } = useTokenIncreaseAllowance(addAllowance);

    const onUserMsgChange = (e) => {
        setUserInputMsg(e.target.value);
    };
    const onPostMsg = async () => {
        setPostMsgStatus("posting");
        const tx = await makeNewAnnouncement?.();
        await tx.wait();
        toast({
            title: "YA!!",
            description: "post new message successfully!",
            status: "success",
            duration: 5000,
            isClosable: true,
            onCloseComplete: () => {
                setPostMsgStatus("idle");
                setUserInputMsg("");
            },
        });
    };
    const onIncreaseAllowance = async () => {
        const tx = await increaseAllowance?.();
        await tx.wait();
        toast({
            title: "YA!!",
            description: "increase allowance successfully!",
            status: "success",
            duration: 5000,
            isClosable: true,
            onCloseComplete: () => {
                //setStatus("idle");
                //setTxHash("");
            },
        });
    };
    return (
        <Box p="3">
            <Heading>留言板</Heading>
            <p>Current Balance: {balance} TTT</p>
            <Box display="flex" alignItems="center" my="2">
                <Text>Current Announcement: </Text>
                <Box borderRadius="lg" bg="gray.200" p="2" ml="3">
                    {announcement}
                </Box>
            </Box>
            <Box display="flex" alignItems="center">
                <Text>Increase allowance by</Text>
                <NumberInput
                    mx="3"
                    size="sm"
                    variant="filled"
                    value={addAllowance}
                    onChange={(value) => setAddAllowance(value)}
                    defaultValue={0}
                    min={0}
                    max={100}
                >
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                <Text>TTT</Text>
                <Button
                    ml="3"
                    variant="filled"
                    bg="blue.300"
                    onClick={onIncreaseAllowance}
                >
                    Go!!
                </Button>
            </Box>
            <Box
                mt="4"
                bg="gray.200"
                p="2"
                display="flex"
                flexDirection="column"
                borderRadius="lg"
                justifyContent="space-around"
                h="35vh"
            >
                <Text>Last paid: {announcementLastPaid} TTT</Text>
                <Text>Current Allowance: {allowance} TTT</Text>
                <Box pr="10">
                    <Input
                        placeholder="type any messages"
                        variant="filled"
                        border="solid"
                        borderWidth="1px"
                        value={userInputMsg}
                        onChange={onUserMsgChange}
                    ></Input>
                </Box>

                <Box display="flex" justifyContent="space-between" pr="10">
                    <Text>
                        How much (TTT) do you wanna pay for posting a new
                        message?
                    </Text>
                    <NumberInput
                        size="sm"
                        variant="filled"
                        value={userPay}
                        onChange={(value) => setUserPay(value)}
                        defaultValue={0}
                        min={0}
                        max={100}
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </Box>
                <Button
                    variant="filled"
                    bg="blue.300"
                    w="50%"
                    isLoading={postMsgStatus === "posting" ? true : false}
                    loadingText="Posting new message..."
                    onClick={onPostMsg}
                >
                    pay TTT to post message
                </Button>
            </Box>
        </Box>
    );
};

export default Board;
