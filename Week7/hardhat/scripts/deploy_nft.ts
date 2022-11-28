import { ethers } from "hardhat";

async function main() {
  const [signer] = await ethers.getSigners();
  console.log(signer.address);

  const NFT = await ethers.getContractFactory("NFT");
	const nft = await NFT.deploy(
    "NFT",
    "NFT",
    "https://ipfs.io/ipfs/bafybeiccgrpvc67evjwsfa2kqk5yglkux6j2bkcl3ye56frc5zhxkycdf4/"
  );
  console.log("正在發佈 NFT ...")
	await nft.deployed();
	console.log("NFT 合約地址: ", nft.address);
  // 0x6fC9d31fcdBCCA0cb4a68840B87F0a80c8Ce12Da
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
