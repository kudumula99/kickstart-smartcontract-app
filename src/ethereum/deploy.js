const HDWalletProvider = require('@truffle/hdwallet-provider');
const { interfaces } = require('mocha');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
    process.env.NEXT_PUBLIC_META_MASK,
    process.env.NEXT_PUBLIC_INFURA_API
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('attempting to deploy from account: ', accounts[0]);

    const result = await new web3.eth.Contract(compiledFactory.abi)
    .deploy({data: compiledFactory.evm.bytecode.object})
    .send( {from:accounts[0], gas:'3000000'});

    console.log('Contract deployed to: ', result.options.address);
    provider.engine.stop();
};

deploy();