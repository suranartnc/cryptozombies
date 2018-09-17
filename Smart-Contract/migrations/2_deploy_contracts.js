const zombiefactory = artifacts.require("./zombiefactory.sol");
const dummy = artifacts.require("./dummy.sol");

module.exports = function(deployer) {
  deployer.deploy(zombiefactory);
  deployer.deploy(dummy);
};
