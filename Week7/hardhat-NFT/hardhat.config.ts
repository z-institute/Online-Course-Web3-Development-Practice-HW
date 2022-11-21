import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require("dotenv").config();
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;

const POLYGON_PRIVATE_KEY = process.env.POLYGON_PRIVATE_KEY;
const POLYGON_RPC_URL = process.env.POLYGON_RPC_URL;
const POLYGON_API_KEY = process.env.POLYGON_API_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [`0x${GOERLI_PRIVATE_KEY}`],
      chainId: 5,
    },
    mumbai: {
      url: POLYGON_RPC_URL,
      accounts: [`0x${GOERLI_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: POLYGON_API_KEY,
  },
};

export default config;
