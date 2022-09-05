import { Injectable } from "@nestjs/common";
import { ethers, providers, Wallet, BigNumberish } from "ethers";
import { encodeFactoryData, encodeWalletData } from "laser-sdk/dist/utils";
import { FactoryTransaction } from "laser-sdk/dist/sdk/LaserFactory";
import { LaserDB, OffChainTransaction } from "./db/LaserDb";
import { Address } from "laser-sdk/dist/types";

@Injectable()
export class AppService {
  db: LaserDB;

  constructor() {
    this.db = new LaserDB();
  }

  async updateDb(tx: OffChainTransaction) {
    try {
      await this.db.write(tx);
      return 200;
    } catch (e) {
      throw Error(e);
    }
  }

  async getTransactions(address: Address) {
    return this.db.getAllTransactions(address.toLowerCase());
  }
}
