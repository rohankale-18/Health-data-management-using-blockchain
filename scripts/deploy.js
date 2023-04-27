const { ethers } = require("hardhat");

async function main() {
  const provider = ethers.provider;
  const signer = provider.getSigner("0x02DC29a7e9b9fdb60Dd7b718cCdF9f519aB3389F"); // replace with your signer's address

  const contractFactory = await ethers.getContractFactory("Healthdata", signer);
  const contract = await contractFactory.deploy();

  console.log("Contract deployed to address:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
