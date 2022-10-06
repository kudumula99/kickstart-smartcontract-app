import web3 from "./web3";
import compiledCampaignFactor from '../ethereum/build/CampaignFactory.json'

const instance = new web3.eth
    .Contract(compiledCampaignFactor.abi, '0x8c32A5E1b381B39E49A5f70325Adfb74b4e48295');


export default instance;