require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse frown slab carpet return mad social inner knife equal gentle'; 
let testAccounts = [
"0x78e4c77fd6376b937cbda41bb089012b850dc1096136d835da10bfede3883a37",
"0xa44903d701dd7ba91f69dbf070c06054211d1e08d3d6ff991846a4918615579c",
"0x8196d7238016a59ac3c1c6deeaf6b615c8799f79ff3179855f9b65282d3dd1e3",
"0x46f98a52eacc92fd3b80f808e2fb97d356b493db28b67d59d1b359b0cd50fb0f",
"0x959da616a5bf3bdcea4ebe762dc6779c62f182d9f24516873b0cb147172b41ae",
"0x0cc1e825dfb5925aaea983829c7b6d5e6498007b0b797aa0e2eb9c99a30f7d81",
"0x8b8009297813358c7b8d14c5d8fe30d7ba48db909bada934426e724a1f2772e6",
"0xf1665552c6ed259edaaa5d2d7f276674862c99997c5740c26d87b532acb10a34",
"0xb95f918bdd6ea7302f36186bb7e7a4f2960c6b8086b95e49dd26a32efe54df48",
"0xa6140c637edfbd2dca875a2ab08480d37b3c6c8cb2e4274c36a471883ee97fe0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


