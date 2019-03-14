# Crowdfund Sample for VeChain

## Overview

This sample crowdfund application is modified based on Stephen Grider's open source application KickStart. The original Kickstart is based on Ethereum, we have modified it to be able to run on VeChain.

This sample application shows how to port over a Ethereum based application onto VeChain. It also shows the basic components of a VeChain dApp application. In order to fully leverage VeChain features, users should consider to use VeChain's commex APIs.

### Functional Overview

Kickstarter is a centralized crowdfunding platform, used by creators and entrepreneurs to showcase their ideas and ask the internet community for capital support for their plans. People can support the projects, but they do not have a voice/vote on the way the funds will be spent once the campaign reaches its funding goal.

A creator/entrepreneur can deploy a crowdfunding campaign with a name and a description of the objective, as well as a minimum contribution threshold. People in control of Ethereum addresses can support it with at least the minimum contribution to become supporters and participate in the development of the project.

### Technical Overview

This sample Crowdfund application consists of a web application, smart contracts and crypto currency payments. The Web Application is implemented using React.js and Node.js. The smart contracts are written in Solidity. VeChain Tokens VET is used for raising fundThe crypto currency payment 

## Installing
1.  Get source code `git clone https://gitlab.com/sangopen/vechain-crowdfunding-sample.git`
2.  Go to vechain folder `cd vechain-crowdfunding-sample/vechain`
3.  Open web3.js in vechain folder, update network field to point to VeChain network URL
4.  Start web3-gear `web3-gear --endpoint {vechain network url}`
5.  Deploy contracts to network `truffle migrate` or `truffle migrate --reset` if you want to redeployed again
6.  Get CampaignCreator contract address and update to factory.js in vechain folder
7.  Go to root folder `cd ..`
8.  Run install node modules `npm install`
9.  Run node app `npm run dev`
10. Install comet wallet on chrome `https://chrome.google.com/webstore/detail/comet/jpkkakbelpcambmhdcaoidiejaikiemn` to sign transaction

