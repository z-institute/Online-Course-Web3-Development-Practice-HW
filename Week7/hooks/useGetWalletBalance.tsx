import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useBalance } from "wagmi";

const useGetWalletBalance = () => {
  const { address } = useAccount();
  const { data, isError, isLoading } = useBalance({
    address: address,
    watch: true,
  });
  const [symbol, setSymbol] = useState("");
  const [addr, setAddr] = useState("");
  const [balance, setBalance] = useState("");

  useEffect(() => {
    setSymbol(data?.symbol || "");
    setAddr(address || "");
    setBalance(data?.formatted || "");
  }, [address, data]);

  return {
    addr,
    balance,
    symbol,
  };
};

export default useGetWalletBalance;
