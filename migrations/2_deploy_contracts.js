var Wallet = artifacts.require('Wallet');

//Somehow adding the network as a second parameter solves the error - research why
module.exports = function (deployer, network, accounts) {
  const _approvers = [accounts[0], accounts[1], accounts[2]];
  const _quorum = 2;
  deployer.deploy(Wallet, _approvers, _quorum);
};
