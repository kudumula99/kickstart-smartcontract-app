import Web3 from "web3";
//const HDWalletProvider = require('@truffle/hdwallet-provider');

let web3;

if(typeof window !== 'undefined' && typeof window.ethereum !== 'undefined'){
    //we are in the browser & user installed metamask
    window.ethereum.request({ method: "eth_requestAccounts" });
    web3 = new Web3(window.ethereum); //we are taking a copy of metamask provider and creating a new instance
}
else{
    //we are in the server OR user is not running the metamask
    //we will access the Rinkeby n/w through infura API
    const provider = new Web3.providers.HttpProvider(process.env.NEXT_PUBLIC_INFURA_API);

    web3 = new Web3(provider);//taking a copy of infura provider and creating local instance
}

export default web3;
