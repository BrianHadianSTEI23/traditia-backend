import { ethers } from "hardhat";

async function main() {
  const Contract = await ethers.getContractFactory("ArtifactRegistry");
  const contract = await Contract.deploy();
  console.log("Deployed to:", contract.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
