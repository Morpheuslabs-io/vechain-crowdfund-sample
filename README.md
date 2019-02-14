# crowdfundsample

## Installing
1.  Get source code `git clone https://gitlab.com/sangopen/vechain-crowdfunding-sample.git`
2.  Go to ethereum folder `cd vechain-crowdfunding-sample/ethereum`
3.  Open web3.js in ethereum folder, update network field to point to VeChain network URL
4.  Start web3-gear `web3-gear --endpoint {vechain network url}`
5.  Deploy contracts to network `truffle migrate` or `truffle migrate --reset` if you want to redeployed again
6.  Get CampaignCreator contract address and update to factory.js in ethereum folder
7.  Go to root folder `cd ..`
8.  Run install node modules `npm install`
9.  Run node app `npm run dev`
10. Install comet wallet on chrome `https://chrome.google.com/webstore/detail/comet/jpkkakbelpcambmhdcaoidiejaikiemn` to sign transaction

