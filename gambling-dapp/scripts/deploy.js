async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const SimpleGamblingGame = await ethers.getContractFactory("SimpleGamblingGame");
  const simpleGamblingGame = await SimpleGamblingGame.deploy();

  console.log("SimpleGamblingGame deployed to:", simpleGamblingGame.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });