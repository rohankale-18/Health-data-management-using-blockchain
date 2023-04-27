require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    myCustomNetwork: {
      url: "http://104.198.68.50/",
      chainId:1337,
      accounts: ["65f1daf95175103efb4c3c9338161ecfcced58f32965e288f429cff0ca993bfe"],
    },
  },
  paths: {
    artifacts: "./website/src/artifacts",
  },
};