

const hre = require("hardhat");

async function main() {
  // make sure to change the name of your contract
  const NFT = await hre.ethers.getContractFactory("NFT");
  // 4 in the bracket is to give the value to the parameter(_pizzaSize) in the constructor of the smart contract contract.
  const nft = await NFT.deploy();

  await nft.waitForDeployment();

  console.log("NFT contract address:", await nft.getAddress());
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });