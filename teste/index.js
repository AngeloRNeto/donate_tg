'use strict'
const Web3 = require("web3");
const Ganache = require("ganache-cli");

const web3 = new Web3(Ganache.provider());
web3.eth.getAccounts(console.log);
