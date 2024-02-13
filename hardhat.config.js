require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const APOTHEM_NETWORK_URL = process.env.APOTHEM_NETWORK_URL;
const APOTHEM_PRIVATE_KEY = process.env.APOTHEM_PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    local: {
      url: 'http://localhost:8545'
    },
    apothem: {
      url: APOTHEM_NETWORK_URL,
      accounts: [APOTHEM_PRIVATE_KEY],
    },
  },
};
