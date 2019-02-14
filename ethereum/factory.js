import web3 from './web3';
import CampaignFactory from './build/contracts/CampaignCreator.json';

const campaignFactoryAddress = "0x707b814b4edec30f047e0ff1a9cb95907a2bae29";

const instance = new web3.eth.Contract(CampaignFactory.abi, campaignFactoryAddress);

export default instance;
