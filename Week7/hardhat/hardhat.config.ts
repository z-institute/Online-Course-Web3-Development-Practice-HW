require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("@openzeppelin/hardhat-upgrades");
// require("hardhat-gas-reporter");
require("solidity-coverage");

const ALCHEMY_API_KEY = "";
const PRIVATE_KEY = "";

module.exports = {
  solidity: "0.8.15",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    }
   },
  networks: {
    goerli: {
      // url: "https://rpc.ankr.com/eth_goerli",
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      chainId: 5,
      gasPrice: 20000000000,
      accounts: [`${PRIVATE_KEY}`]
    },
  },
  gasReporter: {
    gasPrice: 100,
    showTimeSpent: true,
    currency: "USD"
  }
};
