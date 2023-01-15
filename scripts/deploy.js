const hre = require("hardhat");

async function main() {
  //we get contract to deploy
  const Land = await hre.ethers.getContractFactory("Land");
  const land = await Land.deploy();

  await land.deployed();
  console.log("land is deployed", land.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
