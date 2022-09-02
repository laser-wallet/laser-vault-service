"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInfuraITXProvider = exports.getNetworkName = void 0;
const ethers_1 = require("ethers");
function getNetworkName(chainId) {
    switch (chainId) {
        case 1: {
            return "mainnet";
        }
        case 3: {
            return "ropsten";
        }
        case 5: {
            return "goerli";
        }
        case 42: {
            return "kovan";
        }
        default: {
            throw Error("Unsupported chain id.");
        }
    }
}
exports.getNetworkName = getNetworkName;
function createInfuraITXProvider(network, infuraKey) {
    return new ethers_1.ethers.providers.InfuraProvider(network, infuraKey);
}
exports.createInfuraITXProvider = createInfuraITXProvider;
//# sourceMappingURL=providers.js.map