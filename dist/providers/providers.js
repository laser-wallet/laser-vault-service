"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProvider = void 0;
const ethers_1 = require("ethers");
require("dotenv").config();
const INFURA_KEY = process.env.INFURA_KEY;
function getProvider(chain) {
    if (INFURA_KEY !== undefined) {
        return new ethers_1.ethers.providers.JsonRpcProvider(`https://${chain}.infura.io/v3/${INFURA_KEY}`);
    }
    else {
        return ethers_1.ethers.providers.getDefaultProvider(chain);
    }
}
exports.getProvider = getProvider;
//# sourceMappingURL=providers.js.map