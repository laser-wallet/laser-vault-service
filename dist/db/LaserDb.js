"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaserDB = void 0;
const level_ts_1 = require("level-ts");
const providers_1 = require("../providers/providers");
const utils_1 = require("../utils/utils");
class LaserDB {
    constructor() {
        this._db = new level_ts_1.default("./database");
    }
    async get(addressWithNonce) {
        return this._db.get(addressWithNonce.toLowerCase());
    }
    async getAllTransactions(_address) {
        let current = 0;
        const address = _address.toLowerCase();
        let results = [];
        while (true) {
            try {
                const tx = await this._db.get(address + current.toString());
                results.push(tx);
                current++;
            }
            catch (e) {
                break;
            }
        }
        return results;
    }
    async write(tx) {
        const provider = (0, providers_1.getProvider)(tx.chain.toString());
        let key = tx.wallet.toLowerCase() + tx.nonce.toString();
        let finalTransaction;
        let isStored;
        try {
            const r = await this.get(key);
            isStored = true;
        }
        catch (e) {
            isStored = false;
        }
        if (isStored) {
            const currentStored = await this.get(key);
            (0, utils_1.verifyTransactions)(tx, currentStored);
            finalTransaction = (0, utils_1.bundleTransactions)(currentStored, tx);
        }
        else {
            finalTransaction = tx;
        }
        await this._db.put(key, finalTransaction);
    }
}
exports.LaserDB = LaserDB;
//# sourceMappingURL=LaserDb.js.map