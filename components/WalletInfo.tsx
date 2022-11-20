import { HStack, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import useGetUserInfo from "../hooks/useGetWalletBalance";

const WalletInfo = () => {
  const userInfo = useGetUserInfo();
  return (
    <HStack>
      <Text>{userInfo.addr}</Text>
      <Text>{userInfo.balance}</Text>
      <Text>{userInfo.symbol}</Text>
    </HStack>
  );
};

export default WalletInfo;
