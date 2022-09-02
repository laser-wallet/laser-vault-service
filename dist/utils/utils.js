"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signRequest = void 0;
const ethers_1 = require("ethers");
async function signRequest(signer, tx) {
    const relayTransactionHash = ethers_1.ethers.utils.keccak256(ethers_1.ethers.utils.defaultAbiCoder.encode(["address", "bytes", "uint", "uint", "string"], [tx.to, tx.data, tx.gas, tx.chainId, tx.schedule]));
    return await signer.signMessage(ethers_1.ethers.utils.arrayify(relayTransactionHash));
}
exports.signRequest = signRequest;
//# sourceMappingURL=utils.js.map