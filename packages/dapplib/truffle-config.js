require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kitten fresh skull drift rule mad promote inflict kiwi equal gate'; 
let testAccounts = [
"0xa1affb9f662c4bb988283aaeff24f4b6f0df88e91e048b9270eeed956250207f",
"0x311d843e05c08520becd62b1f0875d3f3c5faf66dd06a4b1d57518d73f6499a8",
"0x90ec48faac089637774698611e3c3d441523ffe3033ba119faee6d75b9091abe",
"0xda80843b4eddf94ec64cf5e3b8f6126afdd0bf4a42f20dd154f8b93ef3244556",
"0x95201c4c5b7fbb1453456df708a7659901581b186ea2468b1200547398dc059c",
"0x30de8add3b5d984b38485976ee3587903b23f7d8428ad6e3f7c44cecd10d50d8",
"0x3b489f4dd8bafc16d1da979ff01a3bf218c83a08f055d1729666affdadee5550",
"0xa3eb132087ab211cf80ac818e4af41b3222e179e930ce13e3551c57288e984fc",
"0xdcf84a494e3349c2bf4c95f62ba2389f49ada4d16e347a55bae9eecfe8e432e6",
"0x6fe1ef13372b39a6220f08454557923c7906fdc56dcc9693557c31ec649cc7a3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
