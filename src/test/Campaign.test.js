const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); //capital W

const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaign;
let campaignAddress;

beforeEach(async() => {
    accounts = await web3.eth.getAccounts();

    //const bal = await web3.eth.getBalance(accounts[0]);
    //console.log('balance: '+ bal);

    factory = await new web3.eth.Contract(compiledFactory.abi)
        .deploy({data: compiledFactory.evm.bytecode.object})
        .send({from: accounts[0], gas:'3000000'});

    //Create Campaign instance and it will not return address where it is deployed
    await factory.methods.createCampaign('100')
        .send({
            from: accounts[0],
            gas: '3000000' 
        });
    
    //we deployed the contract and get the address of deployed campain contract
    [campaignAddress] = await factory.methods.getDeployedCampaigns().call();

    //contract is already deployed and we have to instruct web3 instance existence of address
    campaign = await new web3.eth.Contract(compiledCampaign.abi, campaignAddress);
});

describe('campaigns', () => {
    it('deploys a contract and a campaign', () => {
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    });

    it('marks caller as the campaign manager', async() => {
        //manager is a public varaiable in the contract, hece we can call it as a method
        const manager = await campaign.methods.manager().call();
        assert.ok(accounts[0], manager);
    });

    it('allows people to contribute money and marks them as approvers', async() => {
        await campaign.methods.contribute()
            .send({
                value:'200',
                from: accounts[1]
            });
        const isContributor = await campaign.methods.approvers(accounts[1]).call();
        assert(isContributor);
    });

    it('requires minimum contribution', async() => {
        try{
            await campaign.methods.contribute()
            .send({
                value: '5',
                from: accounts[1]
            });
            assert(false);
        }
        catch(err) {
            assert(err);
        }
    });

    it('allows a manager to make a payment request', async() => {
        await campaign.methods.createRequest("Buy Plane", 500, accounts[1])
            .send({
                from: accounts[0],
                gas: '1000000'
            });
        
        const request = await campaign.methods.requests(0).call();
        assert.equal("Buy Plane", request.description);
    });

    it('process request', async() => {
        await campaign.methods.contribute()
            .send({
                from:accounts[2],
                value: web3.utils.toWei('10', 'ether')
            })
        
        await campaign.methods
            .createRequest('A', web3.utils.toWei('5', 'ether'), accounts[1])
            .send({from: accounts[0], gas:'1000000'});

        await campaign.methods.approveRequest(0)
            .send({ from: accounts[2], gas: '1000000'});

        await campaign.methods.finalizeRequest(0).send({
            from: accounts[0],
            gas: '1000000'
        });
        
        let balance = await web3.eth.getBalance(accounts[1]);
        balance = web3.utils.fromWei(balance, 'ether');
        balance = parseFloat(balance);

        assert(balance > 104);
        
    });
})



