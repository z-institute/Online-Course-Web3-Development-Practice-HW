import {
  Button,
  ButtonProps,
  Flex,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftElement,
  Box,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useAccount } from "wagmi";
import useAllowance from "../hooks/myToken/useAllowance";

export default function Allowance(props: ButtonProps) {
  const { address } : any = useAccount();
  const allowance: number = useAllowance(address, address);
  return (
    <Flex flexDirection="column" justifyContent="flex-start">
      <Box p="10px" border="1px solid gray">
        <Text>Your Allowance of YTC : {allowance}</Text>
      </Box>
    </Flex>
  );
}
