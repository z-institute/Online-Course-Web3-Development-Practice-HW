import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";

import { Text, VStack } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <>
      <VStack>
        <Text mt="10px" fontSize="3xl" style={{ fontWeight: "bold" }}>
          Hello Wellcome to chatroom V2.
        </Text>
        <Text fontSize="2xl">
          Now, you can free mint YTC token in Token Page, and spend YTC token in
          chatroom,
        </Text>
        <Text fontSize="2xl">you don't need to spend any more ETH.</Text>
      </VStack>
    </>
  );
};

export default Home;
