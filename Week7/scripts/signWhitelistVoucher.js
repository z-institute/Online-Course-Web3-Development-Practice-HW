const { ethers } = require("hardhat");
const { writeFile, readFile } = require("fs/promises");
// const { NFTAddress, } = require("../constants/index");
const VOUCHER_TYPE = {
  NFTVoucher: [{ name: "redeemer", type: "address" }],
};

async function main() {
  const signer = await ethers.getSigners();
  // domain data
  const chainId = hre.network.config.chainId;
  console.log("chain ID:", chainId);
  const contractAddr = "0x7e601A336A54F5d6e0aB6823e70b6d73e1F1107C";
  if (!contractAddr) {
    console.log("[ERROR] contract address not set");
    return;
  }
  const domain = {
    name: "NFT",
    version: "1",
    chainId: chainId,
    verifyingContract: contractAddr,
  };
  // priceIndex, amount, address
  const whitelist = (await readFile("./scripts/whitelist.txt"))
    .toString()
    .split("\n");
  let sigMap = new Map();

  try {
    await Promise.all(
      whitelist.map(async (list) => {
        const struct = list.split(" ");
        const redeemer = struct[0];
        const types = { redeemer }; 
        const signature = await await signer._signTypedData(domain, types, value);

        // if (sigMap.has(redeemer.toLowerCase())) {
        //   let origin = sigMap.get(redeemer.toLowerCase());
        //   let arr;
        //   if (Array.isArray(origin)) arr = origin;
        //   else arr = [origin];
        //   arr = arr.concat([{ voucher, signature }]);
        //   // console.log(arr);
        //   arr.sort((a, b) => {
        //     return (
        //       correctIndex[a.voucher.priceIndex] -
        //       correctIndex[b.voucher.priceIndex]
        //     );
        //   });
        //   // console.log(sums);
        //   sigMap.set(redeemer.toLowerCase(), arr);

        //   if (redeemer == "0x76f838819F33606393E40A8188Cf2B279cB98dF6")
        //     console.log(sums[redeemer.toLowerCase()]);
        // } else {
        if (sigMap.get(redeemer.toLowerCase())) console.log(redeemer);
        sigMap.set(redeemer.toLowerCase(), { voucher, signature });
        // }
        return signature;
      })
    );
  } catch (error) {
    console.log(error);
  }

  // await Promise.all(
  //   sigMap.forEach(async (value, key) => {
  //     let addr = key;
  //     if (Array.isArray(value)) {
  //       console.log(value);
  //     }
  //   })
  // );
  console.log("voucher count:", sigMap.size);
  await writeFile(
    "constants/NFTs/whitelist.json",
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