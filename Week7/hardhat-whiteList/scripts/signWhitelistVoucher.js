const { ethers } = require("hardhat");
const { writeFile, readFile } = require("fs/promises");
const contractAddress = require("../src/contract-address.json");

const VOUCHER_TYPE = {
  NFTVoucher: [{ name: "redeemer", type: "address" }],
}; // 簽章格式，在合約裡面有一個對應的 struct NFTVoucher

async function main() {
  const [signer] = await ethers.getSigners(); // 利用ethers 呼叫狐狸錢包取得Signers
  console.log("signer", [signer]); // 可以檢查
  // domain data
  const chainId = hre.network.config.chainId; // hardhat.config chainId = 5 ，目前使用 goerli
  console.log("chain ID:", chainId);
  const contractAddr = contractAddress.NFT; // NFT 合約地址
  if (!contractAddr) {
    console.log("[ERROR] contract address not set");
    return;
  }
  // 組合訊息 NFTw,版本1 ,chainId,確認合約地址
  const domainData = {
    name: "NFTw",
    version: "1",
    chainId: chainId,
    verifyingContract: contractAddr,
  };
  console.log(domainData);
  // priceIndex, amount, address
  // 讀取白名單
  const whitelist = (await readFile("./scripts/whitelist.txt"))
    .toString()
    .split("\n");
  let sigMap = new Map();

  try {
    await Promise.all(
      whitelist.map(async (list) => {
        const struct = list.split(" ");
        const redeemer = struct[0];
        const voucher = { redeemer };
        const signature = await signer._signTypedData(
          domainData,
          VOUCHER_TYPE,
          voucher
        );

        if (sigMap.get(redeemer.toLowerCase())) console.log(redeemer);
        sigMap.set(redeemer.toLowerCase(), { voucher, signature });

        return signature;
      })
    );
  } catch (error) {
    console.log(error);
  }

  console.log("voucher count:", sigMap.size);
  // 寫入
  await writeFile(
    "./src/whitelist.json",
    JSON.stringify(Object.fromEntries(sigMap), null, 4)
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
