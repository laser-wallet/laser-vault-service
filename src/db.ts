import level from "level-ts";
import { BigNumberish } from "ethers";
import { Chain } from "./provider/getProvider";

type Address = string;

type OffChainTransaction = {
  to: Address;
  value: BigNumberish;
  callData: string;
  nonce: BigNumberish;
  signatures: string;
  signer: string;
  chain: Chain;
};

const db = new level<OffChainTransaction>("./database");

export class LaserDB {
  protected _db: level;

  constructor() {
    this._db = db;
  }

  async get(addressWithNonce: string): Promise<OffChainTransaction> {
    return this._db.get(addressWithNonce);
  }

  // Returns the current nonce of a Laser vault.
  async getCurrentNonce(_address: Address): Promise<Number> {
    let current = 0;
    const address = _address.toLowerCase();

    // First we check that the address is in the DB.
    let addressWithNonce = address + "0";

    // Throws if it is not.
    await this._db.get(addressWithNonce);

    while (true) {
      try {
        await this._db.get(address + current.toString());
        current++;
      } catch (e) {
        break;
      }
    }

    return current;
  }

  async write(_key: string, value: OffChainTransaction) {
    // @todo Verify that the transaction is correct.
    // 1. Signature must match to the owner / guardian / recovery owner of the wallet.

    // Encoded key: `${laserAddress}{nonce}` -> nonce is the current nonce of the db.
    const key = _key.toLowerCase();
    await this._db.put(key, value);
  }
}
