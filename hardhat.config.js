require("@nomicfoundation/hardhat-toolbox");
const { mnemonic } = require('./secrets.json');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	defaultNetwork: "localhost",
	networks: {
		localhost: {
			url: "http://127.0.0.1:9545"
		},
		hardhat: {
		},
		testnet: {
			url: "https://cosmological-frequent-log.bsc-testnet.discover.quiknode.pro/206e23bb8a0d019d9f6f97be0e384f26edc631ca/",
			chainId: 97,
			gasPrice: 20000000000,
			accounts: {mnemonic: mnemonic}
		},
		mainnet: {
			url: "https://summer-solitary-hexagon.bsc.discover.quiknode.pro/9f37f98e2230cc2ccc59a901bb1756af546f9d97/",
			chainId: 56,
			gasPrice: 20000000000,
			accounts: {mnemonic: mnemonic}
		}
	},
	solidity: {
		version: "0.8.17",
		settings: {
			optimizer: {
				enabled: true
			}
		}
	},
	mocha: {
		timeout: 20000
	},
	etherscan: {
		apiKey: {
			bsc: '4C2328SSW63VFIWQZMYWD2NZERUUGN3VT1'
		}
	}
};
