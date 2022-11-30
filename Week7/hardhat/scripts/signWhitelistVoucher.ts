import hre, { ethers } from "hardhat";
import fs from "fs";

const VOUCHER_TYPE = {
  NFTVoucher: [{ name: "redeemer", type: "address" }],
};

async function main() {
  const [signer] = await ethers.getSigners();
  console.log(signer.address);
  const chainId = 5;
  console.log("chain ID:", chainId);

  const contractAddress = "0x6fC9d31fcdBCCA0cb4a68840B87F0a80c8Ce12Da";
  console.log("contractAddress: ", contractAddress);
  if (!contractAddress) {
    console.log("[ERROR] contract address not set");
    return;
  }

  const domainData = {
    name: "NFT",
    version: "1",
    chainId: chainId,
    verifyingContract: contractAddress,
  };

  // priceIndex, amount, address
  let re = fs.readFileSync("scripts/whitelist.txt", 'utf8');
  let whitelist = re.toString().split("\n");
  // console.log(whitelist);
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
  fs.writeFileSync(
    'scripts/whitelist.json',
    JSON.stringify(Object.fromEntries(sigMap), null, 4)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });