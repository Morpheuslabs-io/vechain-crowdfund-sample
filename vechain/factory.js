import web3 from './web3';
import CampaignFactory from './build/contracts/CampaignCreator.json';

const campaignFactoryAddress = "0x6b543c0f669b8ac222ee8c491b1e9e193e000609";

const instance = new web3.eth.Contract(CampaignFactory.abi, campaignFactoryAddress);

export default instance;
