const zombieownership = artifacts.require("./zombieownership.sol");

module.exports = function(deployer) {
  deployer.deploy(zombieownership);
};
