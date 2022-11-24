import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Links: Array<String> = ["Token", "Board", "NFTs"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={children?.toString().toLowerCase()}
    fontSize="20px"
    style={{ fontWeight: "bold" }}
  >
    {children}
  </Link>
);

export default function withAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} boxShadow='lg'>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link href="/">
              <Image src="https://warehouse.kaik.network/school/favicon/d9887f6b-03a2-4543-83cf-4c38d5be61e4/8663666c-3162-437a-a749-4e2a9e6824e1.png" />
              </Link>
              {Links.map((link, i) => (
                <NavLink key={i}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>

          <Flex alignItems={"center"}>
            <ConnectButton
              variant={"solid"}
              colorScheme={"teal"}
              size={"sm"}
              mr={4}
              leftIcon={<AddIcon />}
            />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link, i) => (
                <NavLink key={i}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
