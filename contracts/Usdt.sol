// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";

contract Usdt is ERC20 {
	constructor() ERC20("SPX TEST USDT", "USDT") {
	//	_mint(address(0xdEDBba1d373E25CA11827B4c574bD2Ad40d91a13), 10000000 ether);
		_mint(address(0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266), 10000000 ether);
	}
}
