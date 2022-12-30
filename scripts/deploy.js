// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
	/*
	const currentTimestampInSeconds = Math.round(Date.now() / 1000);
	const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
	const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

	const lockedAmount = hre.ethers.utils.parseEther("1");
	*/

//	console.log(hre.ethers.utils.getAddress("0xf632dc343db98097307f6c63af84e5d8b4f03991"));
	/*
	const Usdt = await hre.ethers.getContractFactory("Usdt");
	const usdt = await Usdt.deploy();
	await usdt.deployed();

	console.log("USDT address:", usdt.address);
	*/

	const Sx = await hre.ethers.getContractFactory("Sx");
//	const sx = await Sx.deploy("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"); // localhost
//	const sx = await Sx.deploy("0xdedbba1d373e25ca11827b4c574bd2ad40d91a13"); // testnet
	const sx = await Sx.deploy("0xdEDBba1d373E25CA11827B4c574bD2Ad40d91a13"); // mainnet

	await sx.deployed();

	/*
	console.log(
		`Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
	);
	*/

	console.log(sx.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
