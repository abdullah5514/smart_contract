// https://eth-goerli.g.alchemy.com/v2/2ftsu2IxqZh8N2Yg30GA3f0xdkkyq1cu

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.9',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/2ftsu2IxqZh8N2Yg30GA3f0xdkkyq1cu',
      accounts: [ 'cc21f952ab153654bdec6fe13a3b94d4e8bb85e880aecfc8b0d4cc13033d7b3f' ]
    }

  }
}