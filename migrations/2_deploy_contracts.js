const SimpleStorage = artifacts.require("SimpleStorage.sol");

module.exports = function (deployer) {
  deployer.deploy(SimpleStorage); //if you have any additional args in ur constructor go add them
};
