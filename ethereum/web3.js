const thorify = require("thorify").thorify;
import { extend } from 'thorify/dist/extend'
const Web3 = require("web3");

let web3;
const network = "http://bops-t.morpheuslabs.io:25549";

if (typeof window !== 'undefined' && typeof window.thor !== 'undefined') {
    // We are in the browser and metamask is running. 
    web3 = new Web3(window.thor);
    extend(web3);
    // enableThor();
    
} else {
  // We are on the server *OR* the user is not running metamask
//  const provider = new Web3.providers.HttpProvider(network);
//  web3 = new Web3(provider);
    web3 = thorify(new Web3(), network);
}

export default web3;
