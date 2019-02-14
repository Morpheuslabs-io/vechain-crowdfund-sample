/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */



// const getGasPrice = async function() {
//   let err, res;
//   [err, res] = await to (axios.get('https://www.etherchain.org/api/gasPriceOracle')).then(response => response.data.standard);
//
//   if (err) {
//     gasPrice = 10000000000;
//   } else {
//     gasPrice = res;
//   }
// };
// getGasPrice();

module.exports = {
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    // network for unit testing
    development: { // web3-gear network
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
      gas: 5000000,
    }
  }
};
