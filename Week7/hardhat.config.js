require("@nomicfoundation/hardhat-toolbox");

require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat:{
    },
    goerli: {
      url: process.env.GOERLI_RPC_URL,
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
      chainId: 5,
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
};
