const NFT = artifacts.require("NFTToken");

module.exports = function (deployer) {
  deployer.deploy(NFT);
};
