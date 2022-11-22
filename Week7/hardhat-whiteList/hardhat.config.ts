import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require("dotenv").config();
const { GOERLI_PRIVATE_KEY, GOERLI_RPC_URL } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [`0x${GOERLI_PRIVATE_KEY}`],
      chainId: 5,
    },
    // goerli: {
    //   url: process.env.GOERLI_RPC_URL,
    //   accounts: { mnemonic: process.env.MNEMONIC },
    //   chainId: 5,
    // },

    // mumbai: {
    //   url: POLYGON_MUMBAI_RPC_PROVIDER,
    //   accounts: [`0x${GOERLI_PRIVATE_KEY}`],
    // },
  },
  // etherscan: {
  //   apiKey: POLYGONSCAN_API_KEY,
  // },
};

export default config;
