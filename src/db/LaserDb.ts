import level from "level-ts";
import { BigNumberish } from "ethers";
import { getProvider } from "../providers/providers";
import { verifyTransactions, bundleTransactions } from "../utils/utils";

type Address = string;

export type OffChainTransaction = {
  wallet: Address;
  to: Address;
  value: string;
  callData: string;
  nonce: string;
  signatures: string;
  signer: string;
  chain: string;
  transactionType: string;
  description?: string;
};

export class LaserDB {
  private _db: level;

  constructor() {
    this._db = new level<OffChainTransaction>("./database");
  }

  async get(addressWithNonce: string): Promise<OffChainTransaction> {
    return this._db.get(addressWithNonce.toLowerCase());
  }

  async getAllTransactions(_address: Address): Promise<OffChainTransaction[]> {
    let current = 0;
    const address = _address.toLowerCase();

    let results = [];

    while (true) {
      try {
        const tx = await this._db.get(address + current.toString());
        results.push(tx);
        current++;
      } catch (e) {
        break;
      }
    }
    return results;
  }

  async write(tx: OffChainTransaction) {
    tx.value = tx.value.toString();
    // We can only write if the address is a deployed Laser contract.
    //const provider = getProvider(tx.chain.toString());
    //await isLaser(tx.wallet, tx.chain);

    // @todo Verify that the transaction is correct.
    // 1. Signature must match to the owner / guardian / recovery owner of the wallet.

    // Encoded key: `${laserAddress}{nonce}` -> nonce is the current nonce of the db.
    let key = tx.wallet.toLowerCase() + tx.nonce.toString();
    let finalTransaction: OffChainTransaction;
    let isStored: Boolean;
    try {
      const r = await this.get(key);
      isStored = true;
    } catch (e) {
      isStored = false;
    }

    if (isStored) {
      const currentStored = await this.get(key);
      verifyTransactions(tx, currentStored);
      finalTransaction = bundleTransactions(currentStored, tx);
    } else {
      finalTransaction = tx;
    }

    await this._db.put(key, finalTransaction);
  }
}
