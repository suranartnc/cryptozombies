const zombiefactory = artifacts.require("./zombiefactory.sol");

module.exports = function(deployer) {
  deployer.deploy(zombiefactory);
};
