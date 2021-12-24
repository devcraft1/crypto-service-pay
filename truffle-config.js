const path = require('path')
const { projectId, mnemonic } = require('./secrets.json');
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${projectId}`),
      network_id: 3,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 5,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },

  },
  mocha: {
    // timeout: 100000
  },

  contracts_build_directory: path.join(__dirname, "client/src/contracts"),

  compilers: {
    solc: {
      version: "0.8.9",    // Fetch exact version from solc-bin (default: truffle's version)
    }
  },

};

