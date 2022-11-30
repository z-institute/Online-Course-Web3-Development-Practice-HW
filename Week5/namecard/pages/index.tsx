import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import { SetStateAction, useEffect, useState } from "react";
import Card from "../components/Card";
import NFTCard from "../components/NFTCard";
import useEnsData from "../hooks/useEns";
import useImgColor from "../hooks/useImgColor";

import { Spinner } from "@chakra-ui/react";
import { colorRawType } from "../types/colorRawType";
import { ensDataType } from "../types/ensDataType";

const Home: NextPage = () => {
  const [domainName, setDomainName] = useState("");
  const [finalDomainName, setFinalDomainName] = useState(domainName);
  const [currentAddr, setCurrentAddr] = useState(undefined);
  const ensData: ensDataType = useEnsData(currentAddr, finalDomainName);

  const imgColor: Array<colorRawType> = useImgColor(ensData.avatarUrl || "");
  const [sortedColors, setSortedColors] = useState<Array<colorRawType>>([]);

  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    console.log("ensData.ensName", ensData.ensName);
    setIsFetching(!(ensData.ensName == finalDomainName) && (finalDomainName != ""));
  }, [ensData, finalDomainName]);

  const setQuery = () => {
    setFinalDomainName(domainName);
  };

  useEffect(() => {
    setSortedColors(sortColors(imgColor));
  }, [imgColor]);

  const convertColor = (clr: colorRawType | undefined) => {
    if (clr) {
      return `rgb(${clr._rgb[0]},${clr._rgb[1]},${clr._rgb[2]})`;
    } else {
      return "";
    }
  };

  const getBrightness = (clr: colorRawType) => {
    if (clr) {
      return clr._rgb[0] * 0.299 + clr._rgb[1] * 0.587 + clr._rgb[2] * 0.114;
    } else {
      return 0;
    }
  };
  const sortColors = (colors: Array<colorRawType>) => {
    if (!colors) return [];
    let clrs = colors
      .map((clr) => ({ clr, brightness: getBrightness(clr) }))
      .sort((a, b) => {
        return a.brightness - b.brightness;
      })
      .map(({ clr }) => clr);
    return clrs;
  };

  return (
    <>
      <Head>
        <title>The Ens Namecard Example</title>
        <meta
          name="description"
          content="Generated by @rainbow-me/create-rainbowkit"
        />
        <link rel="icon" href="/Ww.png" />
      </Head>
      <Center
        w="100%"
        height="100vh"
        backgroundColor={convertColor(sortedColors[4]) || "gray.100"}
        transitionDuration="1s"
      >
        <Box px="5">
          <Heading
            mb={5}
            color={sortedColors[0] ? convertColor(sortedColors[0]) : "gray.100"}
          >
            The ENS Namecard
          </Heading>

          <ConnectButton />
          <Input
            borderColor={
              sortedColors[0] ? convertColor(sortedColors[0]) : "gray.100"
            }
            mt="5"
            value={domainName}
            placeholder="Enter your ens domain name or your Ethereum address"
            onChange={(e: { target: { value: SetStateAction<string> } }) => {
              if (e.target.value.toString().startsWith("0x")) {
                setDomainName(e.target.value);
                setCurrentAddr(e.target.value);
              } else {
                setDomainName(e.target.value);
              }
            }}
          ></Input>
          <HStack spacing="5" mt={2}>
            <Text>Example: </Text>
            <Link
              onClick={() => {
                setDomainName("dreamwalter.test");
                setFinalDomainName("dreamwalter.test");
              }}
            >
              dreamwalter.test
            </Link>
            <Link
              onClick={() => {
                setDomainName("dreamryan.test");
                setFinalDomainName("dreamryan.test");
              }}
            >
              dreamryan.test
            </Link>
          </HStack>
          <Button
            mt="2"
            backgroundColor={
              sortedColors[0] ? convertColor(sortedColors[0]) : "gray.100"
            }
            color="white"
            w="100%"
            onClick={setQuery}
          >
            {" "}
            Fetch
            {isFetching && <Spinner ml={3} size="sm" color="white" />}
          </Button>
          <Box mt="5">
            <NFTCard ethAddress={ensData.ethAddress || ""}></NFTCard>
          </Box>
        </Box>

        <Card
          cardData={ensData}
          colors={sortedColors}
          cardBgColor={convertColor(imgColor && imgColor[1])}
        ></Card>
      </Center>

    </>
  );
};

export default Home;
