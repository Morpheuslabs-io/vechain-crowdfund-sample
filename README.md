# Crowdfund Sample for VeChain

## Overview

This sample crowdfund application is modified based on Stephen Grider's open source application KickStart. The original Kickstart is based on Ethereum, we have modified it to be able to run on VeChain.

This sample application shows how to port over a Ethereum based application onto VeChain. It also shows the basic components of a VeChain dApp application. In order to fully leverage VeChain features, users should consider to use VeChain's commex APIs.

### Functional Overview

Kickstarter is a centralized crowdfunding platform, used by creators and entrepreneurs to showcase their ideas and ask the internet community for capital support for their plans. People can support the projects, but they do not have a voice/vote on the way the funds will be spent once the campaign reaches its funding goal.

A creator/entrepreneur can deploy a crowdfunding campaign with a name and a description of the objective, as well as a minimum contribution threshold. People in control of Ethereum addresses can support it with at least the minimum contribution to become supporters and participate in the development of the project.

### Technical Overview

This sample Crowdfund application consists of a web application, smart contracts and crypto currency payments. The Web Application is implemented using React.js and Node.js. The smart contracts are written in Solidity. VeChain wallet Comet and token VET are used for payment. Truffle is used for smart contract compilation and deployment. CDE of ML BPaaS (Morphesy Labs Blockchain Platform as a Service) is used as the integrated development for Web Application and smart contract development and testing together with VeChain Solo node on ML BPaaS. Once the web application and smart contracts have been tested on ML BPaaS, then the smart contracts can be deployed to testnet or mainnet from CDE of ML BPaaS. For more detailed info about ML BPaaS, refer to https://docs.morpheuslabs.io/docs.

Note that web3-gear is VeChain API proxy for web application to connect to the VeChain network node.

## Exploring, customizing and testing the Application on ML BPaaS.
1.  Download Sample Crowdfund application from Application Library. Deploy the application into a new workspace. Then start and open the workspace. Then you can use CDE to modify and test the application. Note that you can create a VeChain Solo node from Bloclchain Ops on ML BPaaS. You can refer to README in another Application VIP180 Web Version for the detailed configurations required to deployment the smart contracts and how to configure Comet.
2.  Go to vechain folder `cd vechain-crowdfunding-sample/vechain`
3.  Open web3.js in vechain folder, update network field to point to VeChain network URL (internal URL of the Solo node if you are using the Solo node on ML BPaaS)
4.  Start web3-gear `web3-gear --endpoint {vechain network url}`
5.  Deploy contracts to network `truffle migrate` or `truffle migrate --reset` if you want to redeployed again
6.  Get CampaignCreator contract address and update to factory.js in vechain folder
7.  Go to root folder `cd ..`
8.  Run install node modules `npm install`
9.  Run node app `npm run dev`
10. Install Comet wallet on chrome `https://chrome.google.com/webstore/detail/comet/jpkkakbelpcambmhdcaoidiejaikiemn` to sign transaction.
11. Configure the end point in the Comet wallet to the target network, e.g. testnet, mainnet, or the solo node on the ML BPaaS platform. You should use the external URL of the Solo node when you configure the custom end point to connect to the solo node. Refer to the ML BPaaS document to see how to find out internal and external URL of the Solo node : https://docs.morpheuslabs.io/docs/blockchain-networks.

The source of the original KickStart application: https://github.com/StephenGrider/EthereumCasts/tree/master/kickstart.

